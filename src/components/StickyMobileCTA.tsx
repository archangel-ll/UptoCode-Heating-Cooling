import Link from 'next/link';
import { Calendar, ClipboardList, Phone } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-2 shadow-2xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2 text-xs font-semibold">
        <a href={siteContent.phoneHref} className="flex flex-col items-center rounded-lg bg-slate-100 py-2 text-slate-700"><Phone className="h-4 w-4" />Call</a>
        <Link href="/book-estimate" className="flex flex-col items-center rounded-lg bg-[#0b3a82] py-2 text-white"><Calendar className="h-4 w-4" />Book</Link>
        <Link href="/request-quote" className="flex flex-col items-center rounded-lg bg-slate-100 py-2 text-slate-700"><ClipboardList className="h-4 w-4" />Quote</Link>
      </div>
    </div>
  );
}
