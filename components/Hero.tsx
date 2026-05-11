export default function Hero() {
  return (
    <section className="bg-[var(--color-surface)] py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block bg-[var(--color-primary)] text-white text-sm font-semibold px-3 py-1.5 rounded-full mb-6">Yoga Alliance Certified — RYT 200</span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug mb-4 text-[var(--color-text)]">Find your stillness in Didsbury</h1>
          <p className="text-[var(--color-text-muted)] text-lg mb-8">Small classes · All levels welcome · Hatha · Vinyasa · Yin · Meditation</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-secondary-dark)] hover:opacity-90 text-white font-bold px-6 py-3.5 rounded-full transition-colors">Book a class</a>
            <a href="/classes" className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] font-semibold px-6 py-3.5 rounded-full transition-colors">View timetable</a>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="text-[var(--color-primary)] text-xl font-bold">200+</span>
            <span className="text-[var(--color-text-muted)] text-sm">students through the studio · 4 years in Didsbury</span>
          </div>
        </div>
      </div>
    </section>
  );
}
