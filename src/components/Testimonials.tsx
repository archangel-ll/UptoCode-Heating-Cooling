import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { siteContent } from '@/data/siteContent';

export function Testimonials() {
  return (
    <section id="reviews" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Customer Feedback Themes</h2>
        <p className="mt-2 text-slate-600">Built from recurring review patterns: professional service, fair pricing, and dependable communication.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteContent.testimonials.map((item) => (
            <Card key={item.name} className="rounded-3xl p-5">
              <Quote className="h-6 w-6 text-[#0b3a82]" />
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{item.text}”</p>
              <p className="mt-4 text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.location}</p>
              <p className="mt-2 text-xs font-semibold text-[#0b3a82]">{item.highlight}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
