'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const initial = {
  fullName: '',
  phone: '',
  email: '',
  serviceNeeded: '',
  urgency: 'standard',
  postalCode: '',
  preferredContact: 'phone',
  details: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!form.fullName || !form.phone || !form.email || !form.serviceNeeded || !form.postalCode) {
      setError('Please fill in all required fields before submitting.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailValid) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess(true);
    setForm(initial);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
        <p className="font-bold">Request received.</p>
        <p className="mt-1">Thanks! This demo form is ready to connect to Formspree, Resend, or a webhook endpoint.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name *"><Input value={form.fullName} onChange={(e) => update('fullName', e.target.value)} /></Field>
        <Field label="Phone *"><Input value={form.phone} onChange={(e) => update('phone', e.target.value)} /></Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email *"><Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} /></Field>
        <Field label="Service Needed *"><Input value={form.serviceNeeded} onChange={(e) => update('serviceNeeded', e.target.value)} /></Field>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Urgency">
          <select className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm" value={form.urgency} onChange={(e) => update('urgency', e.target.value)}>
            <option value="standard">Standard</option>
            <option value="priority">Priority</option>
            <option value="asap">ASAP</option>
          </select>
        </Field>
        <Field label="Postal Code *"><Input value={form.postalCode} onChange={(e) => update('postalCode', e.target.value)} /></Field>
        <Field label="Preferred Contact Method">
          <select className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm" value={form.preferredContact} onChange={(e) => update('preferredContact', e.target.value)}>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text</option>
          </select>
        </Field>
      </div>
      <Field label="Project Details">
        <Textarea value={form.details} onChange={(e) => update('details', e.target.value)} placeholder="Tell us about your issue, equipment, timeline, or goals." />
      </Field>
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      <Button type="submit" className="w-full sm:w-auto">Submit Request</Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
