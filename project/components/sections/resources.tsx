"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

export function ResourcesSection() {
  const resources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "Browse Docs"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      link: "Watch Videos"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      link: "Read Stories"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Join our active developer community",
      link: "Join Community"
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
          <h2 className="text-3xl font-bold mb-4">Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started and grow with DeepCloud
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {resource.description}
                  </p>
                  <Button variant="link" className="p-0">
                    {resource.link} →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}