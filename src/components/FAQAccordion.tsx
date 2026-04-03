'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { siteContent } from '@/data/siteContent';

export function FAQAccordion() {
  return (
    <section id="faq" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-7 space-y-3">
          <Accordion type="single" collapsible>
            {siteContent.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`item-${idx}`} className="mb-3">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
