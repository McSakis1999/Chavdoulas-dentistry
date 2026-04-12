import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
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

export default async function Home() {
  const t = await getTranslations();
  const tFeatures = await getTranslations('features');
  const tServices = await getTranslations('services');
  const tTestimonials = await getTranslations('testimonials');
  const tHero = await getTranslations('hero');
  const tCTA = await getTranslations('cta');

  const features = [
    { icon: <Shield className="h-6 w-6 text-primary" />, title: tFeatures('tech.title'), desc: tFeatures('tech.desc') },
    { icon: <Star className="h-6 w-6 text-primary" />, title: tFeatures('expert.title'), desc: tFeatures('expert.desc') },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: tFeatures('emergency.title'), desc: tFeatures('emergency.desc') },
  ];

  const testimonials = [
    { name: tTestimonials('sarah.name'), role: tTestimonials('sarah.role'), content: tTestimonials('sarah.content'), seed: 'patient1' },
    { name: tTestimonials('michael.name'), role: tTestimonials('michael.role'), content: tTestimonials('michael.content'), seed: 'patient2' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                {tHero('badge')}
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-[1.1]">
                {tHero('title')}
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground md:text-2xl leading-relaxed">
                {tHero('subtitle')}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'h-16 px-10 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1' })}>
                  {tHero('cta')}
                </Link>
                <Link href="/services" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-16 px-10 text-lg font-bold border-2 hover:bg-primary/5 transition-all' })}>
                  {tServices('viewAll')}
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
                <span>{tHero('trusted')}</span>
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
                    <p className="text-sm font-bold">{tHero('rating')}</p>
                    <p className="text-xs text-muted-foreground">{tHero('ratingDesc')}</p>
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{tFeatures('title')}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {tFeatures('subtitle')}
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{tServices('title')}</h2>
              <p className="text-primary-foreground/80">
                {tServices('subtitle')}
              </p>
            </div>
            <Link href="/services" className={buttonVariants({ variant: 'secondary' })}>
              <span className="flex items-center gap-2">
                {tServices('viewAll')} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[tServices('general'), tServices('cosmetic'), tServices('implants'), tServices('orthodontics')].map((service, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 transition-colors hover:bg-white/20">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{tServices('desc')}</p>
                <Link href="/services" className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  {tServices('learnMore')} <ChevronRight className="h-4 w-4" />
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
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{tTestimonials('title')}</h2>
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
                          src={`https://picsum.photos/seed/${t.seed}/50/50`}
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
                <p className="text-2xl font-bold">"{tTestimonials('quote')}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-[800px] space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{tCTA('title')}</h2>
            <p className="text-lg text-muted-foreground">
              {tCTA('subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'h-14 px-10 text-lg' })}>
                {tHero('cta')}
              </Link>
              <Link href="/contact" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-14 px-10 text-lg' })}>
                {tCTA('callUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
