'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const tContact = useTranslations('contact');
  const tFooter = useTranslations('footer');

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">Χ</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">ΧΑΒΔΟΥΛΑΣ ΘΩΜΑΣ</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {tFooter('desc')}
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{tFooter('quickLinks')}</h4>
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
                <Phone className="h-4 w-4" /> {tContact('phone')}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {tContact('email')}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" /> {tContact('address')}
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{tFooter('associations')}</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="https://www.eoo.gr/eoo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Ελληνική Ομοσπονδία Οδοντιάτρων
                  </a>
                </li>
                <li>
                  <a href="https://os-magnesia.gr/union/association?arlang=Greek&type=index" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Σύλλογος Οδοντιάτρων Μαγνησίας
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ΧΑΒΔΟΥΛΑΣ ΘΩΜΑΣ. {tFooter('rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
