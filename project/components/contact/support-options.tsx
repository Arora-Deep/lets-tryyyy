"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export function SupportOptions() {
  const options = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Enterprise Sales",
      description: "+91 9141414242",
      availability: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant answers from our support team",
      availability: "Average response time: 2 minutes"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "info@deepcloud.in",
      availability: "Response within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      description: "Bangalore, India",
      availability: "Visit by appointment"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Multiple Ways to Connect</h2>
          <p className="text-lg text-muted-foreground">
            Choose your preferred way to reach our enterprise team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {option.availability}
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