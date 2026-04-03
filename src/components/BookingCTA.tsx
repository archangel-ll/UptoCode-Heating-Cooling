import Link from 'next/link';
import { Calendar, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/siteContent';

export function BookingCTA() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-gradient-to-br from-[#0b3a82] to-[#0a254d] p-8 text-white md:p-10">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Need HVAC Help in {siteContent.city}?</h2>
        <p className="mt-3 max-w-2xl text-blue-100">Book your free estimate or send a quote request in under a minute. Built for quick response workflows.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/book-estimate">
            <Button variant="outline" className="border-white/40 bg-white text-[#0a254d] hover:bg-blue-50">
              <Calendar className="mr-2 h-4 w-4" />
              {siteContent.ctas.book}
            </Button>
          </Link>
          <Link href="/request-quote">
            <Button variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <ClipboardList className="mr-2 h-4 w-4" />
              {siteContent.ctas.quote}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
