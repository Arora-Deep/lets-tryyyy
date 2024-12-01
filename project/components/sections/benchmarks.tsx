"use client";

import { motion } from 'framer-motion';
import { PerformanceChart } from '@/components/ui/performance-chart';

export function BenchmarksSection() {
  const performanceData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 550 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 750 },
    { name: 'Jun', value: 900 }
  ];

  const latencyData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 18 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 12 },
    { name: 'May', value: 10 },
    { name: 'Jun', value: 8 }
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
          <h2 className="text-3xl font-bold mb-4">Performance Benchmarks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world performance metrics showing DeepCloud's capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PerformanceChart
              title="Requests Per Second"
              data={performanceData}
              strokeColor="hsl(var(--chart-1))"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PerformanceChart
              title="Average Latency (ms)"
              data={latencyData}
              strokeColor="hsl(var(--chart-2))"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}