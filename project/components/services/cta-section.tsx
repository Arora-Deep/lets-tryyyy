"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of companies who trust DeepCloud for their mission-critical infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gradient-bg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="gradient-border glow">
              Schedule Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}