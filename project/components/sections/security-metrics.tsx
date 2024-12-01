"use client";

import { motion } from 'framer-motion';

export function SecurityMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-12 bg-background/50 backdrop-blur-sm border-y"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Instances Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.99%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}