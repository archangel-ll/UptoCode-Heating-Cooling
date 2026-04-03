import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/button';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-extrabold tracking-tight text-slate-900">
          <span className="text-[#0b3a82]">UptoCode</span> Heating & Cooling
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={siteContent.phoneHref} className="hidden items-center gap-1 text-sm font-semibold text-slate-700 sm:flex">
            <Phone className="h-4 w-4 text-[#0b3a82]" /> {siteContent.phone}
          </a>
          <Link href="/book-estimate">
            <Button size="sm">{siteContent.ctas.book}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
