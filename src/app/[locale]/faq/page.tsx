import {useTranslations} from 'next-intl';
import {Card} from '@/components/ui/card';
import * as motion from 'motion/react-client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const t = useTranslations('faq');

  const faqs = [
    {
      question: t('q1'),
      answer: t('a1')
    },
    {
      question: t('q2'),
      answer: t('a2')
    },
    {
      question: t('q3'),
      answer: t('a3')
    },
    {
      question: t('q4'),
      answer: t('a4')
    },
    {
      question: t('q5'),
      answer: t('a5')
    },
    {
      question: t('q6'),
      answer: t('a6')
    }
  ];

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

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container mx-auto max-w-[800px] px-4">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="rounded-2xl border bg-white px-6 shadow-sm transition-all hover:shadow-md">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Blog Teaser / SEO Content Area */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">{t('tips.title')}</h2>
            <p className="text-muted-foreground">{t('tips.subtitle')}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: t('tips.t1'), category: 'Prevention', date: 'Oct 12, 2023' },
              { title: t('tips.t2'), category: 'Oral Care', date: 'Sep 28, 2023' },
              { title: t('tips.t3'), category: 'Treatments', date: 'Aug 15, 2023' }
            ].map((post, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg transition-transform hover:-translate-y-1">
                <img
                  src={`https://picsum.photos/seed/blog${i}/600/400`}
                  alt={post.title}
                  className="aspect-video w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                    <span>{post.category}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold leading-tight">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">Learn more about how to maintain a healthy smile with our expert advice...</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
