'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Card, CardContent} from '@/components/ui/card';
import * as motion from 'motion/react-client';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, label: t('labels.phone'), value: t('phone') },
    { icon: <Mail className="h-5 w-5" />, label: t('labels.email'), value: t('email') },
    { icon: <MapPin className="h-5 w-5" />, label: t('labels.address'), value: t('address') },
    { icon: <Clock className="h-5 w-5" />, label: t('labels.hours'), value: t('hours') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('form.success'));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">{t('title')}</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">{t('getInTouch')}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info, i) => (
                  <Card key={i} className="border-none bg-muted/30">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Map Placeholder */}
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-muted shadow-inner">
                <img
                  src="https://picsum.photos/seed/map/800/450"
                  alt="Map Location"
                  className="h-full w-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-background p-4 shadow-xl">
                    <MapPin className="h-8 w-8 text-primary" />
                    <span className="font-bold">{t('findUs')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl bg-white p-8 shadow-xl lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('form.name')}</Label>
                  <Input id="name" placeholder={t('form.placeholderName')} required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('form.email')}</Label>
                  <Input id="email" type="email" placeholder={t('form.placeholderEmail')} required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('form.phone')}</Label>
                  <Input id="phone" type="tel" placeholder={t('form.placeholderPhone')} className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('form.message')}</Label>
                  <Textarea id="message" placeholder={t('form.placeholderMessage')} required className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2">
                  <Send className="h-5 w-5" /> {t('form.submit')}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
