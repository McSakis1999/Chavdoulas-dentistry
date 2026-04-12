import {getTranslations} from 'next-intl/server';
import {Card, CardContent} from '@/components/ui/card';
import * as motion from 'motion/react-client';
import { Award, Users, Heart, GraduationCap, CheckCircle2 } from 'lucide-react';

export default async function About() {
  const t = await getTranslations('about');

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: t('stats.patients'), value: '2,000+' },
    { icon: <Award className="h-6 w-6" />, label: t('stats.experience'), value: '15+' },
    { icon: <GraduationCap className="h-6 w-6" />, label: t('stats.certifications'), value: '25+' },
    { icon: <Heart className="h-6 w-6" />, label: t('stats.success'), value: '99%' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t('title')}</h1>
              <p className="text-lg text-muted-foreground">
                {t('desc1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('desc2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-video overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
                <img
                  src="https://picsum.photos/seed/dentist-team/800/800"
                  alt="Our Team"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://picsum.photos/seed/doctor-portrait/800/1000"
                  alt="ΧΑΒΔΟΥΛΑΣ ΘΩΜΑΣ"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('doctor.title')}</h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t('doctor.role')}</p>
              <p className="text-lg text-muted-foreground">
                {t('doctor.bio1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('doctor.bio2')}
              </p>
              <div className="space-y-4 pt-4">
                <h4 className="font-bold">{t('doctor.credentials')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t('doctor.c1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t('doctor.c2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t('doctor.c3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
