import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg mb-2">🌿 Stillwater Yoga</p>
            <p className="text-white/70 text-sm">Yoga Alliance certified studio in Didsbury. Small classes, all levels welcome.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-semibold mb-3">Quick links</p>
            <ul className="space-y-2">
              {[{href:"/",label:"Home"},{href:"/classes",label:"Classes"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}].map((l)=>(
                <li key={l.href}><Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <p className="text-white/70 text-sm mb-1"><a href="tel:01610000004" className="hover:text-white transition-colors">0161 000 0004</a></p>
            <p className="text-white/70 text-sm mb-1"><a href="mailto:hello@stillwater-yoga.demo" className="hover:text-white transition-colors">hello@stillwater-yoga.demo</a></p>
            <p className="text-white/70 text-sm">Didsbury, Manchester M20</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-white/50 text-xs text-center">
          &copy; {new Date().getFullYear()} Stillwater Yoga. Demo site.
        </div>
      </div>
    </footer>
  );
}
