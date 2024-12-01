"use client";

import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProblemsSolutions() {
  const items = [
    {
      problem: "Unpredictable Costs",
      impact: "40% of businesses exceed cloud budgets",
      solution: "Transparent Pricing",
      benefit: "100% cost predictability",
      details: "Simple, transparent pricing with no hidden fees. Pay only for what you use with detailed cost breakdowns and forecasting."
    },
    {
      problem: "Limited Support",
      impact: "48+ hours average response time",
      solution: "24/7 Expert Support",
      benefit: "15-minute response time",
      details: "Round-the-clock access to certified cloud experts. Dedicated account managers and proactive monitoring for enterprise clients."
    },
    {
      problem: "Complex Infrastructure",
      impact: "30+ hours per week on management",
      solution: "Easy to Use Platform",
      benefit: "5-minute deployment",
      details: "Intuitive control panel with automated management, one-click deployments, and simplified resource scaling."
    },
    {
      problem: "Security Vulnerabilities",
      impact: "47% increase in security incidents YoY",
      solution: "Enterprise Security",
      benefit: "Zero-trust architecture",
      details: "Military-grade encryption, automated security updates, and comprehensive compliance tools for maximum protection."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(64,224,208,0.1),rgba(255,105,180,0.05))]" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Cloud Challenges into{' '}
            <span className="gradient-text">Competitive Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we turn common infrastructure challenges into opportunities for innovation
          </p>
        </motion.div>

        <div className="grid gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative grid md:grid-cols-2 gap-8 items-stretch"
            >
              {/* Challenge Card */}
              <div className="challenge-card">
                <div className="card-icon challenge-icon">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3>The Challenge</h3>
                <div className="text-2xl font-bold mb-4">{item.problem}</div>
                <div className="impact">Current Impact: {item.impact}</div>
              </div>

              {/* Arrow Connector */}
              <div className="arrow-connector">
                <ArrowRight />
              </div>

              {/* Solution Card */}
              <div className="solution-card">
                <div className="card-icon solution-icon">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3>Our Solution</h3>
                <div className="text-2xl font-bold mb-4">{item.solution}</div>
                <div className="result">Result: {item.benefit}</div>
                <p className="mt-4 text-muted-foreground">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="gradient-bg" asChild>
            <Link href="/contact">
              Transform Your Infrastructure <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}