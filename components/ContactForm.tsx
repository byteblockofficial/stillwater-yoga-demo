export default function ContactForm() {
  return (
    <div className="rounded-lg border border-[var(--color-border,#e5e7eb)] p-8 text-center">
      <p className="text-[var(--color-text-muted,#6b7280)] mb-4">
        This is a demo site built by{" "}
        <a href="https://byteblock.co.uk" className="underline font-medium">ByteBlock</a>.
        Interested in a website like this for your business?
      </p>
      <a
        href="mailto:hello@byteblock.co.uk"
        className="inline-block bg-[var(--color-primary,#2563eb)] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        hello@byteblock.co.uk
      </a>
    </div>
  );
}
