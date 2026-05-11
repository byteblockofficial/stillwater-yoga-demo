import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://stillwater-yoga.vercel.app"),
  title: { default: "Stillwater Yoga | Didsbury, Manchester", template: "%s | Stillwater Yoga" },
  description: "Yoga Alliance certified yoga studio in Didsbury. Hatha, Vinyasa, Yin, meditation, pregnancy yoga. Small classes, all levels welcome.",
  openGraph: { siteName: "Stillwater Yoga", locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
