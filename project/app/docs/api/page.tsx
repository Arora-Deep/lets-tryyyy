"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Key, Code, Shield } from 'lucide-react';
import Link from 'next/link';

export default function APIDocsPage() {
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
            <h1 className="text-4xl font-bold mb-4">API Reference</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete documentation for the DeepCloud API
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Key className="h-6 w-6" />,
                title: "Authentication",
                description: "Learn how to authenticate your API requests",
                href: "/docs/api/auth"
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Endpoints",
                description: "Explore available API endpoints and methods",
                href: "/docs/api/endpoints"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Security",
                description: "Best practices for secure API usage",
                href: "/docs/api/security"
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <Button variant="ghost" className="group" asChild>
                      <Link href={section.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`curl -X POST https://api.deepcloud.com/v1/instances \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "vps",
    "name": "web-server-1",
    "plan": "standard-2x",
    "region": "us-east"
  }'`}</code>
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}