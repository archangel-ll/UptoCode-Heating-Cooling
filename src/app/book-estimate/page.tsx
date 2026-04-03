import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { ContactForm } from '@/components/ContactForm';

export default function BookEstimatePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">Book a Free HVAC Estimate</h1>
        <p className="mt-2 text-slate-600">Calendly embed placeholder below. Replace the URL in <code>src/data/siteContent.ts</code> when going live.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <iframe src={siteContent.bookingUrl} title="Book estimate" className="h-[650px] w-full rounded-2xl" />
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Prefer submitting details first?</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
