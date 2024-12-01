"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Code, Video, FileText } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      description: "Learn the basics of DeepCloud and set up your first resources",
      links: [
        { title: "Quick Start Guide", href: "/docs/quickstart" },
        { title: "Platform Overview", href: "/docs/overview" },
        { title: "Account Setup", href: "/docs/account-setup" }
      ]
    },
    {
      title: "API Reference",
      icon: <Code className="h-6 w-6" />,
      description: "Complete API documentation with examples and SDKs",
      links: [
        { title: "API Introduction", href: "/docs/api" },
        { title: "Authentication", href: "/docs/api/auth" },
        { title: "Endpoints", href: "/docs/api/endpoints" }
      ]
    },
    {
      title: "Tutorials",
      icon: <Video className="h-6 w-6" />,
      description: "Step-by-step guides for common use cases",
      links: [
        { title: "VPS Setup", href: "/docs/tutorials/vps" },
        { title: "DaaS Configuration", href: "/docs/tutorials/daas" },
        { title: "Storage Management", href: "/docs/tutorials/storage" }
      ]
    },
    {
      title: "Best Practices",
      icon: <FileText className="h-6 w-6" />,
      description: "Learn how to optimize your infrastructure",
      links: [
        { title: "Security Guidelines", href: "/docs/best-practices/security" },
        { title: "Performance Tips", href: "/docs/best-practices/performance" },
        { title: "Cost Optimization", href: "/docs/best-practices/costs" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and scale with DeepCloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{section.title}</h2>
                        <p className="text-sm text-muted-foreground">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {section.links.map((link) => (
                        <Button
                          key={link.href}
                          variant="ghost"
                          className="w-full justify-between"
                          asChild
                        >
                          <Link href={link.href}>
                            {link.title}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}