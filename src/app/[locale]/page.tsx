import {useTranslations} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {buttonVariants} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {CheckCircle2, Star, Shield, Clock, ArrowRight, ChevronRight} from 'lucide-react';
import { Metadata } from 'next';
import * as motion from 'motion/react-client';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata.home'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  const features = [
    { icon: <Shield className="h-6 w-6 text-primary" />, title: 'Advanced Technology', desc: 'We use state-of-the-art equipment for precise diagnostics and treatment.' },
    { icon: <Star className="h-6 w-6 text-primary" />, title: 'Expert Team', desc: 'Our dentists are highly qualified with years of experience in various specialties.' },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: 'Emergency Care', desc: 'Same-day appointments for dental emergencies to get you out of pain fast.' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Patient', content: 'The best dental experience I have ever had. The staff is incredibly friendly and the clinic is spotless.' },
    { name: 'Michael Chen', role: 'Patient', content: 'Professional and efficient. They explained everything clearly and the results were fantastic.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary"></span>
                Now accepting new patients
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                {t('hero.title')}
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'h-12 px-8 text-base' })}>
                  {t('hero.cta')}
                </Link>
                <Link href="/services" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-12 px-8 text-base' })}>
                  {t('services.viewAll')}
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-background"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>Trusted by 2,000+ happy patients</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://picsum.photos/seed/dentistry-hero/800/800"
                  alt="Modern Dental Clinic"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-6 shadow-xl lg:-left-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Star className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">Based on Google Reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We combine years of experience with a passion for excellence to provide the best dental care in the region.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none bg-muted/50 transition-all hover:bg-muted">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div className="max-w-[600px]">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('services.title')}</h2>
              <p className="text-primary-foreground/80">
                From routine checkups to complex restorative procedures, we offer a comprehensive range of dental services.
              </p>
            </div>
            <Link href="/services" className={buttonVariants({ variant: 'secondary' })}>
              <span className="flex items-center gap-2">
                {t('services.viewAll')} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[t('services.general'), t('services.cosmetic'), t('services.implants'), t('services.orthodontics')].map((service, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 transition-colors hover:bg-white/20">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">Professional care tailored to your specific needs.</p>
                <Link href="/services" className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">What Our Patients Say</h2>
              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <Card key={i} className="border-none bg-muted/30">
                    <CardContent className="p-6">
                      <div className="mb-4 flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mb-4 italic text-muted-foreground">"{t.content}"</p>
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://picsum.photos/seed/patient${i}/50/50`}
                          alt={t.name}
                          className="h-10 w-10 rounded-full"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-sm font-bold">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/happy-smile/800/1000"
                alt="Happy Patient"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">"I finally found a dentist I can trust. The results are amazing!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-[800px] space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready for a Better Smile?</h2>
            <p className="text-lg text-muted-foreground">
              Book your consultation today and take the first step towards a healthier, brighter smile.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'h-14 px-10 text-lg' })}>
                {t('hero.cta')}
              </Link>
              <Link href="/contact" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-14 px-10 text-lg' })}>
                Call Us: +1 (555) 123-4567
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
