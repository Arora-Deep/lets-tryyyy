"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Key, FileCheck, Users, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">
              Enterprise-Grade{' '}
              <span className="gradient-text">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your security is our top priority. Learn about our comprehensive security measures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Infrastructure Security",
                description: "Multi-layered security approach with advanced firewalls, intrusion detection, and 24/7 monitoring."
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Data Protection",
                description: "End-to-end encryption for data at rest and in transit, with regular security audits."
              },
              {
                icon: <Key className="h-6 w-6" />,
                title: "Access Control",
                description: "Role-based access control with multi-factor authentication and detailed audit logs."
              },
              {
                icon: <FileCheck className="h-6 w-6" />,
                title: "Compliance",
                description: "Regular compliance assessments and adherence to industry standards."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Security Team",
                description: "Dedicated security team monitoring and responding to potential threats 24/7."
              },
              {
                icon: <AlertTriangle className="h-6 w-6" />,
                title: "Incident Response",
                description: "Comprehensive incident response plan with rapid response times."
              }
            ].map((feature, index) => (
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
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Have Security Questions?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our security team is here to help. Contact us to learn more about our security measures and how we can help protect your infrastructure.
                </p>
                <Button size="lg" className="gradient-bg" asChild>
                  <Link href="/contact">
                    Contact Security Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}