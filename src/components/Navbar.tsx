'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import React from 'react';
import { Menu, Globe } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const t = useTranslations('nav');
  const tHero = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'el' ? 'en' : 'el';
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
    { name: t('faq'), path: '/faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-xl font-bold">E</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">Elite Dentistry</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path as any}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {locale.toUpperCase()}
          </Button>
          <Link href="/contact" className={buttonVariants()}>
            {tHero('cta')}
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            <Globe className="h-4 w-4" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path as any}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ className: 'w-full' })}
                >
                  {tHero('cta')}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
