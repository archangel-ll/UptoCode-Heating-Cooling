import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 pb-24 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-600 md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {siteContent.businessName}. Demo landing page for {siteContent.city} HVAC lead generation.
        </p>
        <div className="flex gap-4">
          <Link href="/book-estimate" className="hover:text-slate-900">Book Estimate</Link>
          <Link href="/request-quote" className="hover:text-slate-900">Request Quote</Link>
          <a href={siteContent.phoneHref} className="hover:text-slate-900">{siteContent.phone}</a>
        </div>
      </div>
    </footer>
  );
}
