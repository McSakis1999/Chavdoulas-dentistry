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
  const t = useTranslations();

  const faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer: 'For most people, we recommend a professional cleaning and checkup every six months. However, depending on your oral health, we might suggest more frequent visits.'
    },
    {
      question: 'Do you accept dental insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Our team can help you understand your coverage and maximize your benefits.'
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: 'If you have a dental emergency, call us immediately. We offer same-day appointments for urgent cases to provide quick relief and prevent further damage.'
    },
    {
      question: 'Are dental implants right for me?',
      answer: 'Dental implants are an excellent solution for many people with missing teeth. During a consultation, we will evaluate your bone density and overall health to determine if you are a good candidate.'
    },
    {
      question: 'How can I whiten my teeth safely?',
      answer: 'We offer professional teeth whitening treatments that are much more effective and safer than over-the-counter products. We can provide both in-office treatments and take-home kits.'
    },
    {
      question: 'Is Invisalign as effective as traditional braces?',
      answer: 'For many patients, Invisalign is just as effective as traditional braces for correcting alignment and bite issues, with the added benefit of being nearly invisible and removable.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Everything you need to know about our services and dental health. Can't find what you're looking for? Contact us directly.
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
            <h2 className="text-3xl font-bold tracking-tight">Dental Health Tips</h2>
            <p className="text-muted-foreground">Stay informed with our latest articles on oral hygiene and modern dentistry.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'The Importance of Flossing', category: 'Prevention', date: 'Oct 12, 2023' },
              { title: 'Choosing the Right Toothbrush', category: 'Oral Care', date: 'Sep 28, 2023' },
              { title: 'What to Expect During a Root Canal', category: 'Treatments', date: 'Aug 15, 2023' }
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
