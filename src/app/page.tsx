import { BookingCTA } from '@/components/BookingCTA';
import { ContactSection } from '@/components/ContactSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ServiceCards } from '@/components/ServiceCards';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { Testimonials } from '@/components/Testimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <Testimonials />
      <BookingCTA />
      <FAQAccordion />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
