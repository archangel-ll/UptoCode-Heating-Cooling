import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { siteContent } from '@/data/siteContent';

export function ReviewBadge() {
  return (
    <Card className="inline-flex items-center gap-3 rounded-full px-4 py-2">
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-xs font-semibold text-slate-700">Trusted by Toronto homeowners for professional, on-time HVAC service</p>
      <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">{siteContent.city}</span>
    </Card>
  );
}
