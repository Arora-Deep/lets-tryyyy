"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Book, Headphones, Users } from 'lucide-react';

export function OnboardingSection() {
  const steps = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Quick Setup",
      description: "Get started in minutes with our guided setup process",
      features: [
        "5-minute deployment",
        "Pre-configured templates",
        "Automated provisioning"
      ]
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Free Training",
      description: "Comprehensive training resources for all user levels",
      features: [
        "Video tutorials",
        "Documentation library",
        "Best practices guides"
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Expert assistance available whenever you need it",
      features: [
        "Live chat support",
        "Phone assistance",
        "Email ticketing"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Adoption",
      description: "Smooth transition for your entire team",
      features: [
        "User onboarding",
        "Change management",
        "Adoption tracking"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Effortless Onboarding</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running quickly with our comprehensive onboarding support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}