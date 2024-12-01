"use client";

import { motion } from 'framer-motion';
import { Cpu, Network, Lock, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function KeyFeaturesSection() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Intelligent Resource Management",
      description: "AI-driven resource allocation ensures optimal performance while minimizing costs.",
      capabilities: [
        "Dynamic resource scaling",
        "Workload optimization",
        "Cost optimization",
        "Performance monitoring"
      ]
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Global Edge Network",
      description: "Deploy your applications closer to your users with our worldwide edge network.",
      capabilities: [
        "50+ global locations",
        "Automatic failover",
        "Load balancing",
        "DDoS protection"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security features to protect your infrastructure and data.",
      capabilities: [
        "Zero-trust security",
        "Encryption at rest/transit",
        "Identity management",
        "Compliance tools"
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Insights",
      description: "Real-time analytics and insights to optimize your infrastructure.",
      capabilities: [
        "Performance metrics",
        "Cost analysis",
        "Usage patterns",
        "Predictive analytics"
      ]
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
          <h2 className="text-3xl font-bold mb-4">Features That Matter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful capabilities designed for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full gradient-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {feature.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {capability}
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
      </div>
    </section>
  );
}