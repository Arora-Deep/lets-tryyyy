"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroIllustration } from './hero-illustration';

interface ServiceHeroProps {
  slug: string;
}

const serviceData = {
  vps: {
    badge: "Enterprise-Grade",
    title: "Virtual Private Servers",
    description: "High-performance VPS with guaranteed resources and enterprise-level security. Perfect for mission-critical applications.",
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "100%", label: "NVMe Storage" },
      { value: "24/7", label: "Expert Support" }
    ]
  },
  daas: {
    badge: "Secure Remote Work",
    title: "Desktop as a Service",
    description: "Secure, high-performance virtual desktops accessible from anywhere. Perfect for remote teams and enterprise workforces.",
    metrics: [
      { value: "HD", label: "Streaming (GPU instances)" },
      { value: "100+", label: "App Integrations" },
      { value: "99.9%", label: "Service Availability" }
    ]
  },
  storage: {
    badge: "Infinite Scalability",
    title: "Cloud Storage",
    description: "Enterprise-grade storage solutions with unlimited scalability, automated backups, and advanced security features.",
    metrics: [
      { value: "99.9%", label: "Availability" },
      { value: "∞", label: "Scalability" },
      { value: "100%", label: "NVMe Backed" }
    ]
  },
  publishing: {
    badge: "Role-Based Access",
    title: "Application Publishing",
    description: "Intelligent role-based application delivery ensuring users only access software specific to their roles. Perfect for managing department-specific applications and enhancing security.",
    metrics: [
      { value: "100%", label: "Role Accuracy" },
      { value: "Zero", label: "Unauthorized Access" },
      { value: "Real-time", label: "Access Control" }
    ]
  }
};

export function ServiceHero({ slug }: ServiceHeroProps) {
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return null;
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#40E0D0]/10 blur-[100px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-[#7B68EE]/10 blur-[100px]" />
        <div className="absolute -right-[10%] top-[40%] w-[500px] h-[500px] rounded-full bg-[#FF69B4]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="gradient-text font-medium">{service.badge}</span>
              <div className="mx-2 h-4 w-[1px] bg-border" />
              <span className="text-muted-foreground">High Performance</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Enterprise-Grade{' '}
              <span className="gradient-text">{service.title}</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-bg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              {service.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden gradient-border glow bg-background/50 backdrop-blur-sm">
              <HeroIllustration slug={slug} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}