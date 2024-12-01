"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Book, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
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
            <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the support you need, when you need it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Live Chat",
                description: "Chat with our support team",
                action: "Start Chat",
                href: "/support/chat"
              },
              {
                icon: <Book className="h-6 w-6" />,
                title: "Documentation",
                description: "Browse our knowledge base",
                action: "View Docs",
                href: "/docs"
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone Support",
                description: "Talk to our experts",
                action: "Call Support",
                href: "/support/phone"
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Support",
                description: "Send us a message",
                action: "Email Us",
                href: "/contact"
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      {option.icon}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Button variant="ghost" className="group" asChild>
                      <Link href={option.href}>
                        {option.action}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
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