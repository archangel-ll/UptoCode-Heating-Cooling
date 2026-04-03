import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteContent } from '@/data/siteContent';

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Request a Quote or Book an Estimate</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Local Service Area Coverage</h3>
            <p className="mt-2 text-sm text-slate-600">Serving homeowners throughout {siteContent.city} including:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {siteContent.serviceAreas.map((area) => (
                <li key={area} className="rounded-lg bg-slate-100 px-3 py-2">{area}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0b3a82]" /> {siteContent.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#0b3a82]" /> {siteContent.email}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0b3a82]" /> {siteContent.address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
