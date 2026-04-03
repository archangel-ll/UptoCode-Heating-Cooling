import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export function WhyChooseUs() {
  return (
    <section className="bg-slate-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black md:text-4xl">Why Choose {siteContent.businessName}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {siteContent.whyChooseUs.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-300" />
              <p className="text-sm leading-relaxed text-slate-100">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
