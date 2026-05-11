"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [{ href: "/", label: "Home" }, { href: "/classes", label: "Classes" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg text-[var(--color-primary)]" aria-label="Stillwater Yoga — home">🌿 Stillwater Yoga</Link>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => <Link key={l.href} href={l.href} className="text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">{l.label}</Link>)}
          </nav>
          <a href="/contact" className="hidden md:inline-flex items-center gap-2 bg-[var(--color-secondary-dark)] hover:opacity-90 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-colors">Book a class</a>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md text-[var(--color-text)] hover:bg-[var(--color-surface)]" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">{open ? <><line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> : <><rect y="4" width="22" height="2" rx="1" fill="currentColor"/><rect y="10" width="22" height="2" rx="1" fill="currentColor"/><rect y="16" width="22" height="2" rx="1" fill="currentColor"/></>}</svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-[var(--color-border)] bg-white">
          <nav aria-label="Mobile navigation" className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-[var(--color-text)] font-medium hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]">{l.label}</Link>)}
            <a href="/contact" className="mt-2 flex items-center gap-2 bg-[var(--color-secondary-dark)] text-white font-semibold px-4 py-3 rounded-full">Book a class</a>
          </nav>
        </div>
      )}
    </header>
  );
}
