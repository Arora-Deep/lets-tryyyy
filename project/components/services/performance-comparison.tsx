"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface PerformanceComparisonProps {
  slug: string;
}

const priceData = {
  vps: {
    title: "Price Comparison",
    description: "Transparent pricing that saves you money",
    providers: [
      {
        name: "DeepCloud",
        price: 48,
        color: "bg-primary"
      },
      {
        name: "Azure",
        price: 121,
        color: "bg-blue-500"
      },
      {
        name: "AWS",
        price: 130,
        color: "bg-orange-500"
      },
      {
        name: "Google Cloud",
        price: 158,
        color: "bg-red-500"
      }
    ]
  },
  daas: {
    title: "Price Comparison",
    description: "Enterprise DaaS solutions compared",
    providers: [
      {
        name: "DeepCloud DaaS",
        price: 39,
        color: "bg-primary"
      },
      {
        name: "Azure Virtual Desktop",
        price: 42,
        color: "bg-blue-500"
      },
      {
        name: "Amazon WorkSpaces",
        price: 45,
        color: "bg-orange-500"
      },
      {
        name: "VMware Horizon",
        price: 52,
        color: "bg-indigo-500"
      },
      {
        name: "Citrix Workspace",
        price: 55,
        color: "bg-violet-500"
      }
    ]
  }
};

export function PerformanceComparison({ slug }: PerformanceComparisonProps) {
  if (!['vps', 'daas'].includes(slug)) return null;

  const data = priceData[slug as keyof typeof priceData];
  const maxPrice = Math.max(...data.providers.map(p => p.price));

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-8">
              {data.providers.map((provider, index) => {
                const ratio = (provider.price / maxPrice) * 100;
                
                return (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{provider.name}</span>
                      <span className="text-muted-foreground">
                        ${provider.price}/mo
                      </span>
                    </div>
                    <div className="relative h-4 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ratio}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`absolute inset-y-0 left-0 ${provider.color} rounded-full`}
                      />
                    </div>
                    {provider.name === "DeepCloud" && (
                      <div className="text-xs text-primary">
                        Save up to 70% compared to other providers
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="text-sm text-muted-foreground">
                * Prices shown for comparable plans with 4 vCPUs, 16GB RAM per instance, as on November 18th, 2024.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}