import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">About Stillwater Yoga</h1>
        <div className="space-y-4 text-[var(--color-text)]">
          <p>Stillwater Yoga opened in Didsbury in 2021 with one clear intention: create a yoga studio where people actually feel welcome — regardless of how bendy they are, how long they&apos;ve been practising, or whether they&apos;ve ever stepped on a mat before.</p>
          <p>Our lead teacher holds a Yoga Alliance RYT 200 certification and has been teaching for over eight years, with specialist training in pregnancy yoga and yin. Classes are deliberately small — no more than 12 students — so every student gets genuine attention and adjustment.</p>
          <p>We run a full weekly timetable including morning and evening classes, weekend sessions, and pregnancy yoga on Thursday mornings. Private one-to-one sessions are available by appointment for students recovering from injury or wanting personalised progression.</p>
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mt-6">Our values</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Yoga Alliance certified — RYT 200</li>
            <li>Maximum 12 students per class — always</li>
            <li>All levels genuinely welcome</li>
            <li>Specialist pregnancy yoga programme</li>
            <li>200+ students through the studio since 2021</li>
            <li>Didsbury based — accessible from Chorlton, Withington, and West Didsbury</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-secondary-dark)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-colors">Book a class</a>
        </div>
      </div>
    </section>
  );
}
