import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) { rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS }); return true; }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

function sanitise(input: string): string {
  return input.replace(/<[^>]*>/g, "").replace(/[\x00-\x1F\x7F]/g, "").trim();
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || !recipientEmail) { console.error("Missing env vars"); return NextResponse.json({ error: "Service temporarily unavailable. Please call us directly." }, { status: 500 }); }

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const rawName = typeof body.name === "string" ? body.name : "";
  const rawEmail = typeof body.email === "string" ? body.email : "";
  const rawPhone = typeof body.phone === "string" ? body.phone : "";
  const rawMessage = typeof body.message === "string" ? body.message : "";

  if (!rawName.trim()) return NextResponse.json({ error: "Name is required." }, { status: 400 });
  if (!rawEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail.trim())) return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });

  const name = sanitise(rawName);
  const email = sanitise(rawEmail);
  const phone = rawPhone ? sanitise(rawPhone) : "Not provided";
  const message = rawMessage ? sanitise(rawMessage) : "(no message)";

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({ from: "noreply@stillwater-yoga.vercel.app", to: recipientEmail, replyTo: rawEmail || undefined, subject: `New enquiry from ${name}`, text: [`Name:    ${name}`, `Email:   ${email}`, `Phone:   ${phone}`, ``, `Message:`, message].join("\n") });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message. Please call us directly." }, { status: 500 });
  }
}
