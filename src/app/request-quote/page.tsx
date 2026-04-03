import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">Request a Fast Quote</h1>
        <p className="mt-2 text-slate-600">Share project details below and route submissions to Formspree, Resend, or your webhook.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
