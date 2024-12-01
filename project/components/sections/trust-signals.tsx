"use client";

import { motion } from 'framer-motion';
import { Gauge, Cpu, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function TrustSignals() {
  const metrics = [
    {
      icon: <Gauge className="h-6 w-6" />,
      label: "High Performance",
      description: "Optimized for speed and reliability"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      label: "Modern Infrastructure",
      description: "Latest generation hardware"
    },
    {
      icon: <Award className="h-6 w-6" />,
      label: "Customer Satisfaction",
      description: "95% satisfaction rate"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "99.9% Uptime",
      description: "Reliable service delivery"
    }
  ];

  return (
    <section id="trust" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Built for Performance</h2>
          <p className="text-lg text-muted-foreground">
            Delivering reliable and scalable infrastructure for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
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