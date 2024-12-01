"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "DeepCloud transformed our infrastructure with immediate performance improvements and cost savings.",
      author: "Sarah Chen",
      role: "CTO at TechScale"
    },
    {
      quote: "Our remote team's productivity skyrocketed after switching to DeepCloud DaaS. The performance is incredible.",
      author: "Michael Torres",
      role: "IT Director at RemoteFirst"
    },
    {
      quote: "DeepCloud's application delivery has streamlined our software distribution and improved security.",
      author: "Alex Kim",
      role: "IT Manager at GlobalTech"
    },
    {
      quote: "The reliability and performance of DeepCloud's storage solutions have exceeded our expectations.",
      author: "Emily Rodriguez",
      role: "Data Engineer at DataFlow"
    }
  ];

  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#40E0D0]/5 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-[#FF69B4]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
                    <blockquote className="pl-6 text-lg italic text-muted-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}