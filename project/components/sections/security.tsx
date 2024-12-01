"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Key, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function SecuritySection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption for all data at rest and in transit"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Access Control",
      description: "Role-based access control with multi-factor authentication"
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: "Key Management",
      description: "Advanced key management with hardware security modules"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Compliance",
      description: "SOC 2, ISO 27001, HIPAA, and GDPR compliant infrastructure"
    }
  ];

  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data security is our top priority. We implement multiple layers of protection to ensure your infrastructure remains secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}