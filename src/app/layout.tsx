import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from '@/data/siteContent';

const siteUrl = 'https://uptocode-hvac-demo.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteContent.businessName} | Toronto HVAC Repair, Install & Free Estimates`,
  description:
    'Premium Toronto HVAC landing page demo focused on furnace repair, AC installs, heat pumps, ventilation, and fast quote requests.',
  openGraph: {
    title: `${siteContent.businessName} | Toronto HVAC Services`,
    description: 'Book free estimates and request quotes for trusted HVAC repairs and installations in Toronto.',
    url: siteUrl,
    siteName: siteContent.businessName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteContent.businessName} | Toronto HVAC Services`,
    description: 'Local HVAC landing page demo with conversion-focused booking and quote flow.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: siteContent.businessName,
    areaServed: siteContent.serviceAreas,
    telephone: siteContent.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteContent.city,
      addressRegion: siteContent.province,
      addressCountry: 'CA',
      streetAddress: siteContent.address,
    },
    url: siteUrl,
    priceRange: '$$',
    sameAs: Object.values(siteContent.socialLinks),
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
