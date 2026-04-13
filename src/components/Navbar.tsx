'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import React from 'react';
import { Menu, Globe, Home, Stethoscope, Info, Phone, HelpCircle, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Navbar = () => {
  const t = useTranslations('nav');
  const tHero = useTranslations('hero');
  const tContact = useTranslations('contact');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'el' ? 'en' : 'el';
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { name: t('home'), path: '/', icon: <Home className="h-5 w-5" /> },
    { name: t('services'), path: '/services', icon: <Stethoscope className="h-5 w-5" /> },
    { name: t('about'), path: '/about', icon: <Info className="h-5 w-5" /> },
    { name: t('contact'), path: '/contact', icon: <Phone className="h-5 w-5" /> },
    { name: t('faq'), path: '/faq', icon: <HelpCircle className="h-5 w-5" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <div className="relative h-14 w-48">
            <Image
              src="/logo.png"
              alt="ΧΑΒΔΟΥΛΑΣ ΘΩΜΑΣ"
              fill
              className="object-contain"
              priority
            />
          </div>
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
          <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'px-8 font-semibold shadow-md hover:shadow-lg transition-all' })}>
            {tHero('cta')}
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="h-10 px-2">
            <Globe className="h-4 w-4 mr-1" />
            <span className="text-xs font-bold">{locale.toUpperCase()}</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" />}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-sm">
              <div className="flex items-center justify-between border-b p-6">
                <div className="relative h-10 w-32">
                  <Image
                    src="/logo.png"
                    alt="ΧΑΒΔΟΥΛΑΣ ΘΩΜΑΣ"
                    fill
                    className="object-contain"
                  />
                </div>
                <SheetClose render={<Button variant="ghost" size="icon" className="rounded-full" />}>
                  <X className="h-5 w-5" />
                </SheetClose>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path as any}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl p-4 text-lg font-medium transition-all active:scale-95 ${
                        pathname === item.path 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          pathname === item.path ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.icon}
                        </div>
                        {item.name}
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-transform ${pathname === item.path ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t p-6 space-y-6 bg-muted/30">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('contact')}</p>
                  <a href={`tel:${tContact('phone')}`} className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    {tContact('phone')}
                  </a>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({ size: 'lg', className: 'w-full font-bold shadow-lg' })}
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
