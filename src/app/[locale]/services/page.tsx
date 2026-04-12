import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button, buttonVariants} from '@/components/ui/button';
import * as motion from 'motion/react-client';
import { Stethoscope, Sparkles, Activity, ShieldAlert, HeartPulse, Microscope } from 'lucide-react';

export default async function Services() {
  const t = await getTranslations('services');

  const services = [
    {
      id: 'general',
      title: t('general'),
      icon: <Stethoscope className="h-8 w-8" />,
      description: t('generalDesc'),
      features: ['Professional Cleaning', 'Oral Exams', 'Digital X-rays', 'Fluoride Treatment']
    },
    {
      id: 'cosmetic',
      title: t('cosmetic'),
      icon: <Sparkles className="h-8 w-8" />,
      description: t('cosmeticDesc'),
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      id: 'implants',
      title: t('implants'),
      icon: <HeartPulse className="h-8 w-8" />,
      description: t('implantsDesc'),
      features: ['Single Tooth Implants', 'All-on-4', 'Bone Grafting', 'Implant Restoration']
    },
    {
      id: 'orthodontics',
      title: t('orthodontics'),
      icon: <Activity className="h-8 w-8" />,
      description: t('orthodonticsDesc'),
      features: ['Invisalign', 'Clear Braces', 'Traditional Braces', 'Retainers']
    },
    {
      id: 'emergency',
      title: t('emergency'),
      icon: <ShieldAlert className="h-8 w-8" />,
      description: t('emergencyDesc'),
      features: ['Same-day Appointments', 'Pain Relief', 'Tooth Repair', 'Infection Control']
    },
    {
      id: 'restorative',
      title: t('restorative'),
      icon: <Microscope className="h-8 w-8" />,
      description: t('restorativeDesc'),
      features: ['Crowns & Bridges', 'Fillings', 'Root Canals', 'Dentures']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-[700px] text-lg text-muted-foreground"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={buttonVariants({ variant: 'outline', className: 'w-full' })}>
                      {t('learnMore')}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">{t('cta.title')}</h2>
          <p className="mb-8 text-primary-foreground/80">{t('cta.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              {t('cta.visitFaq')}
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'bg-transparent text-white border-white hover:bg-white/10' })}>
              {t('cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
