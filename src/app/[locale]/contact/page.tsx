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
  const t = useTranslations();

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'hello@elitedentistry.com' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: '123 Dental Plaza, Medical District, City' },
    { icon: <Clock className="h-5 w-5" />, label: 'Hours', value: 'Mon-Fri: 9am - 6pm' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">{t('contact.title')}</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            We're here to help you achieve your best smile. Reach out to us via phone, email, or the contact form below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
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
                    <span className="font-bold">Find us here</span>
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
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input id="name" placeholder="Your Name" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea id="message" placeholder="How can we help you?" required className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2">
                  <Send className="h-5 w-5" /> {t('contact.form.submit')}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
