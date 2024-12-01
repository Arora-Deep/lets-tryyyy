"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Zap, Shield, ArrowUpRight, Server, Database, Layout, Network, HardDrive, Users, Lock, Settings } from 'lucide-react';

interface ScalabilitySectionProps {
  slug: string;
}

const scalabilityContent = {
  vps: {
    title: "Scale Your Infrastructure",
    description: "Grow your virtual infrastructure effortlessly as your business expands",
    features: [
      {
        icon: <Scale className="h-6 w-6" />,
        title: "Flexible Scaling",
        description: "Add or remove resources instantly",
        benefits: []
      },
      {
        icon: <Server className="h-6 w-6" />,
        title: "Resource Management",
        description: "Efficient resource allocation and optimization",
        benefits: []
      },
      {
        icon: <Network className="h-6 w-6" />,
        title: "Network Scaling",
        description: "Expandable network infrastructure",
        benefits: []
      },
      {
        icon: <Database className="h-6 w-6" />,
        title: "Storage Expansion",
        description: "Scalable storage solutions",
        benefits: []
      }
    ]
  },
  daas: {
    title: "Scale Your Virtual Desktop Infrastructure",
    description: "Expand your DaaS environment seamlessly as your team grows",
    features: [
      {
        icon: <Users className="h-6 w-6" />,
        title: "User Scaling",
        description: "Add users instantly",
        benefits: []
      },
      {
        icon: <Server className="h-6 w-6" />,
        title: "Resource Scaling",
        description: "Adjust compute resources on demand",
        benefits: []
      },
      {
        icon: <Network className="h-6 w-6" />,
        title: "Network Capacity",
        description: "Expand network capabilities",
        benefits: []
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Security Scaling",
        description: "Scale security measures with growth",
        benefits: []
      }
    ]
  },
  storage: {
    title: "Infinite Storage Scaling",
    description: "Scale your storage infrastructure without limits",
    features: [
      {
        icon: <HardDrive className="h-6 w-6" />,
        title: "Capacity Scaling",
        description: "Expand storage on demand",
        benefits: []
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Management Tools",
        description: "Simplified storage administration",
        benefits: []
      },
      {
        icon: <Network className="h-6 w-6" />,
        title: "Backup Scaling",
        description: "Flexible backup solutions",
        benefits: []
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Protection Scaling",
        description: "Enhanced data protection",
        benefits: []
      }
    ]
  },
  publishing: {
    title: "Enterprise Application Scaling",
    description: "Scale your application delivery infrastructure across your organization",
    features: [
      {
        icon: <Users className="h-6 w-6" />,
        title: "User Scaling",
        description: "Support growing user base",
        benefits: []
      },
      {
        icon: <Layout className="h-6 w-6" />,
        title: "Application Scaling",
        description: "Expand application portfolio",
        benefits: []
      },
      {
        icon: <Lock className="h-6 w-6" />,
        title: "Security Scaling",
        description: "Enhanced security controls",
        benefits: []
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Management Scaling",
        description: "Simplified administration",
        benefits: []
      }
    ]
  }
};

export function ScalabilitySection({ slug }: ScalabilitySectionProps) {
  const content = scalabilityContent[slug as keyof typeof scalabilityContent];
  if (!content) return null;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                      {feature.benefits.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {feature.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}
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
            Scale with confidence using our enterprise-grade infrastructure
          </p>
          <p className="text-muted-foreground">
            No technical expertise required - we handle the complexity while you focus on growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}