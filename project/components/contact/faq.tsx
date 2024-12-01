"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What kind of support is included with enterprise plans?",
      answer: "Enterprise plans include 24/7 priority support, a dedicated account manager, and access to our solution architects. We also provide custom training and onboarding sessions for your team."
    },
    {
      question: "Can I get custom features or modifications?",
      answer: "Yes, enterprise customers can request custom features and modifications. Our development team works closely with enterprise clients to implement specific requirements and integrations."
    },
    {
      question: "What are your enterprise SLAs?",
      answer: "Our enterprise SLAs guarantee 99.99% uptime, 24/7 monitoring, and response times under 15 minutes for critical issues. We also provide custom SLAs based on your specific needs."
    },
    {
      question: "Do you offer volume pricing?",
      answer: "Yes, we offer significant discounts for enterprise volume commitments. Our sales team will work with you to create a custom pricing plan based on your usage requirements."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our enterprise solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}