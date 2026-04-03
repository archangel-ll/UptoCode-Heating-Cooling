export type ServiceItem = {
  title: string;
  description: string;
  icon: 'wrench' | 'snowflake' | 'zap' | 'wind' | 'calendar';
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  highlight: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteContent = {
  businessName: 'UptoCode Heating and Cooling',
  phone: '+1 (647) 555-0142',
  phoneHref: 'tel:+16475550142',
  email: 'hello@uptocodehvac.ca',
  address: 'Toronto, ON (Demo Address Placeholder)',
  city: 'Toronto',
  province: 'Ontario',
  serviceAreas: ['Downtown Toronto', 'North York', 'Etobicoke', 'Scarborough', 'East York', 'York'],
  hero: {
    heroBackgroundImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Trusted Toronto HVAC Specialists',
    heading: 'Professional HVAC Repairs & Installations That Respect Your Time',
    subheading:
      'Book a free estimate with a team homeowners call for clear communication, fair quotes, and on-time work.',
    primaryCta: 'Book Free Estimate',
    secondaryCta: 'Call Now',
  },
  quickStats: [
    { label: 'Customer Rating Theme', value: 'Professional & On-Time' },
    { label: 'Primary Focus', value: 'Repairs + Installations' },
    { label: 'Quote Experience', value: 'Competitive & Clear' },
  ],
  services: [
    {
      title: 'Furnace Repair',
      description: 'Fast diagnostics, honest recommendations, and clean workmanship to restore heat quickly.',
      icon: 'wrench',
    },
    {
      title: 'AC Repair & Installation',
      description: 'Reliable cooling tune-ups, repairs, and system replacements sized for your home.',
      icon: 'snowflake',
    },
    {
      title: 'Heat Pump Services',
      description: 'Efficient heat pump installation and service to improve comfort through every season.',
      icon: 'zap',
    },
    {
      title: 'Duct & Ventilation Work',
      description: 'Ventilation balancing and duct improvements for healthier airflow and better efficiency.',
      icon: 'wind',
    },
    {
      title: 'Seasonal Maintenance',
      description: 'Prevent breakdowns with planned tune-ups before peak heating and cooling demand.',
      icon: 'calendar',
    },
  ] as ServiceItem[],
  whyChooseUs: [
    'Professional technicians who explain options clearly before work starts.',
    'Competitive quote process built around your home and budget goals.',
    'On-time arrivals and organized job flow that minimizes disruption.',
    'Clean installs with detailed walkthroughs and next-step guidance.',
    'Built for repeat trust from first visit to long-term maintenance.',
  ],
  testimonials: [
    {
      name: 'Priya M.',
      location: 'North York',
      text: 'They were professional from start to finish. The quote was clear, fair, and there were no surprises on install day.',
      highlight: 'Professional + competitive quote',
    },
    {
      name: 'Daniel R.',
      location: 'Etobicoke',
      text: 'Team arrived on time, explained each step, and left everything clean. Communication was excellent throughout.',
      highlight: 'On-time + clear communication',
    },
    {
      name: 'Amira S.',
      location: 'Downtown Toronto',
      text: 'Used them for furnace work and later ventilation updates. I would absolutely hire them again.',
      highlight: 'Repeat customer confidence',
    },
  ] as Testimonial[],
  faqs: [
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes. This demo flow is built around booking a free estimate so homeowners can compare options confidently.',
    },
    {
      question: 'Which HVAC services do you focus on?',
      answer: 'Core services include furnace repairs, AC repair/install, heat pumps, duct and ventilation work, plus seasonal maintenance.',
    },
    {
      question: 'How quickly can I request a quote?',
      answer: 'You can submit the quote form in under a minute. The form is structured for easy connection to Formspree, Resend, or any webhook.',
    },
    {
      question: 'Is the booking calendar live?',
      answer: 'The embedded scheduler is a Calendly placeholder for demo purposes and can be replaced with your production booking link.',
    },
  ] as FAQItem[],
  ctas: {
    book: 'Book Free Estimate',
    quote: 'Request Quote',
    call: 'Call Now',
  },
  bookingUrl: 'https://calendly.com/your-calendly-placeholder/free-estimate',
  socialLinks: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
};

export type SiteContent = typeof siteContent;
