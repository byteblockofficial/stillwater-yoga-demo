import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact & bookings" };

export default function ContactPage() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Book a class or get in touch</h1>
        <p className="text-[var(--color-text-muted)] mb-10">Message us to check availability, ask about class types, or enquire about private sessions.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-[var(--color-primary)] text-white rounded-2xl p-6">
              <p className="font-semibold text-lg mb-2">Class timetable</p>
              <ul className="text-sm text-white/80 space-y-1">
                <li>Mon / Wed / Fri — Hatha 7:00am & Vinyasa 7:00pm</li>
                <li>Tuesday — Yin 6:30pm</li>
                <li>Thursday — Pregnancy yoga 10:00am · Meditation 7:00pm</li>
                <li>Saturday — Vinyasa 9:00am</li>
              </ul>
              <p className="text-xs text-white/60 mt-3">Book via Mindbody (placeholder link) or message us below.</p>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Call us</p>
              <a href="tel:01610000004" className="text-[var(--color-primary)] font-bold text-lg hover:underline">0161 000 0004</a>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">Monday – Saturday, 8am – 8pm</p>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Studio location</p>
              <p className="text-sm text-[var(--color-text-muted)]">Didsbury, Manchester M20. Close to East Didsbury tram stop. Limited on-site parking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
