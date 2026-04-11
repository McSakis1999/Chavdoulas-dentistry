'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const tContact = useTranslations('contact');

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">E</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">Elite Dentistry</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing world-class dental care with a personal touch. Your smile is our priority.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{tNav('services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{tServices('general')}</li>
              <li>{tServices('cosmetic')}</li>
              <li>{tServices('implants')}</li>
              <li>{tServices('orthodontics')}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">{tNav('about')}</Link></li>
              <li><Link href="/contact">{tNav('contact')}</Link></li>
              <li><Link href="/faq">{tNav('faq')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{tNav('contact')}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@elitedentistry.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" /> 123 Dental Plaza, Medical District, City
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elite Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
