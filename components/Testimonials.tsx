const testimonials = [
  { quote: "I came to Stillwater as a complete beginner and now I practise four times a week. The small class sizes make such a difference.", author: "H.F.", location: "Didsbury" },
  { quote: "The pregnancy yoga classes were a sanctuary during my third trimester. Gentle, informed, and genuinely caring.", author: "L.K.", location: "West Didsbury" },
  { quote: "The Yin classes have transformed how I manage stress. I leave feeling completely reset. Wonderful studio.", author: "M.C.", location: "Chorlton" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">What students say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="bg-white border-l-4 border-[var(--color-secondary)] p-6 rounded-2xl shadow-sm">
              <p className="text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm font-semibold text-[var(--color-text-muted)]">{t.author} · {t.location}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
