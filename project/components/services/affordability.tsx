"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingDown, Zap, Users } from 'lucide-react';

export function AffordabilitySection() {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost-Effective Solution",
      description: "Save up to 60% compared to traditional desktop infrastructure with our pay-as-you-go model",
      metrics: ["No upfront costs", "Flexible billing", "Resource optimization"]
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Reduced IT Overhead",
      description: "Minimize maintenance costs and IT staff requirements with our managed solution",
      metrics: ["Automated updates", "Centralized management", "Reduced support tickets"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick ROI",
      description: "See immediate returns with rapid deployment and reduced hardware costs",
      metrics: ["Instant provisioning", "Hardware savings", "Productivity gains"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Flexible Licensing",
      description: "Only pay for what you use with our flexible user-based licensing model",
      metrics: ["User-based pricing", "Scale up/down", "No lock-in"]
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Affordable Desktop Virtualization</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your workplace with cost-effective virtual desktops that don't break the bank
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.metrics.map((metric) => (
                          <li key={metric} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl border bg-background/50 backdrop-blur-sm text-center"
        >
          <p className="text-lg mb-2">
            Start with just $25/user/month and scale as you grow
          </p>
          <p className="text-muted-foreground">
            No hidden fees, no long-term commitments - just simple, transparent pricing
          </p>
        </motion.div>
      </div>
    </section>
  );
}