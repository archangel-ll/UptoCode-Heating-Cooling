import { CalendarDays, Snowflake, Wind, Wrench, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { ComponentType } from 'react';
import { siteContent, type ServiceItem } from '@/data/siteContent';

const iconMap: Record<ServiceItem['icon'], ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  snowflake: Snowflake,
  zap: Zap,
  wind: Wind,
  calendar: CalendarDays,
};

export function ServiceCards() {
  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">HVAC Services for Toronto Homes</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Focused service coverage for repairs, replacements, airflow improvements, and preventative maintenance.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} className="rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="h-7 w-7 text-[#0b3a82]" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
