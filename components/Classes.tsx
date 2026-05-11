const classes = [
  { name: "Hatha yoga", desc: "Foundational postures and breathing. Slow-paced and ideal for beginners or those wanting to rebuild a practice." },
  { name: "Vinyasa flow", desc: "Dynamic, breath-led flow linking postures in sequence. Builds strength and flexibility. All levels." },
  { name: "Yin yoga", desc: "Deep, long-held postures targeting connective tissue. Meditative, restorative, and deeply calming." },
  { name: "Meditation", desc: "Guided seated practice covering breathwork, body scan, and mindfulness. No experience needed." },
  { name: "Pregnancy yoga", desc: "Specifically designed for all trimesters. Safe, supportive, and community-focused. Birth preparation included." },
  { name: "Private sessions", desc: "One-to-one sessions tailored entirely to your goals — recovery, flexibility, strength, or stress relief." },
];

export default function Classes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Classes &amp; sessions</h2>
        <p className="text-[var(--color-text-muted)] mb-8">Maximum 12 students per class. All levels welcome.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c) => (
            <div key={c.name} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
              <h3 className="font-semibold text-[var(--color-primary)] mb-2">{c.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
