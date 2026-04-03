'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/button';
import { ReviewBadge } from '@/components/ReviewBadge';

export function Hero() {
  return (
    <section className="px-4 pb-16 pt-12 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          style={{
            backgroundImage: `linear-gradient(95deg, rgba(15,23,42,0.84) 0%, rgba(15,23,42,0.72) 48%, rgba(15,23,42,0.2) 100%), url('${siteContent.hero.heroBackgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            {siteContent.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            {siteContent.hero.heading}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 max-w-2xl text-lg text-blue-100">
            {siteContent.hero.subheading}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
            <Link href="/book-estimate">
              <Button size="lg">
                {siteContent.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={siteContent.phoneHref}>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <PhoneCall className="mr-2 h-4 w-4" />
                {siteContent.hero.secondaryCta}
              </Button>
            </a>
          </motion.div>
          <div className="mt-8">
            <ReviewBadge />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Why homeowners book first</p>
          <div className="mt-6 space-y-4">
            {siteContent.quickStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
