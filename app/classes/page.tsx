import type { Metadata } from "next";
import Classes from "@/components/Classes";
export const metadata: Metadata = { title: "Yoga classes" };

export default function ClassesPage() {
  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Yoga classes &amp; timetable</h1>
        <p className="text-[var(--color-text-muted)]">Maximum 12 students per class. All levels welcome. Contact us to check current availability.</p>
      </div>
      <Classes />
    </div>
  );
}
