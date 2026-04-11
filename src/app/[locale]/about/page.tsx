import {useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';
import * as motion from 'motion/react-client';
import { Award, Users, Heart, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const t = useTranslations();

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: 'Happy Patients', value: '2,000+' },
    { icon: <Award className="h-6 w-6" />, label: 'Years Experience', value: '15+' },
    { icon: <GraduationCap className="h-6 w-6" />, label: 'Certifications', value: '25+' },
    { icon: <Heart className="h-6 w-6" />, label: 'Success Rate', value: '99%' },
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Mission is Your Smile</h1>
              <p className="text-lg text-muted-foreground">
                At Elite Dentistry, we believe that everyone deserves a healthy, beautiful smile. Our clinic was founded on the principles of integrity, excellence, and patient-centered care.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine the latest dental technology with a gentle, compassionate approach to ensure that every visit is comfortable and effective.
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
                  alt="Dr. Alex Rivera"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Dr. Alex Rivera</h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Lead Dentist & Founder</p>
              <p className="text-lg text-muted-foreground">
                Dr. Rivera graduated with honors from the University of Dental Medicine and has since dedicated his career to mastering the art and science of dentistry.
              </p>
              <p className="text-lg text-muted-foreground">
                With over 15 years of experience, he specializes in cosmetic dentistry and dental implants. He is a member of the American Academy of Cosmetic Dentistry and stays at the forefront of the field through continuous education.
              </p>
              <div className="space-y-4 pt-4">
                <h4 className="font-bold">Credentials & Education</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Doctorate of Dental Surgery (DDS)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Master's in Implantology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Certified Invisalign Provider
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
