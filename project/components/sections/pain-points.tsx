"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Server, Scale, Shield, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function PainPointsSection() {
  const painPoints = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Complex Infrastructure Management",
      description: "Traditional cloud solutions require extensive technical expertise and constant maintenance.",
      impact: "Increased operational costs and slower time-to-market",
      stats: {
        label: "Average Time Spent",
        value: "30+ hrs/week"
      }
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Unpredictable Scaling",
      description: "Manual scaling leads to either over-provisioning or performance issues during peak loads.",
      impact: "Wasted resources or lost business opportunities",
      stats: {
        label: "Resource Waste",
        value: "40% Avg"
      }
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Vulnerabilities",
      description: "Maintaining security across distributed systems is challenging and error-prone.",
      impact: "Risk of data breaches and compliance violations",
      stats: {
        label: "Security Incidents",
        value: "↑47% YoY"
      }
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Limited Performance",
      description: "Traditional VMs and containers often face performance bottlenecks.",
      impact: "Poor user experience and reduced productivity",
      stats: {
        label: "Performance Drop",
        value: "35% Peak"
      }
    }
  ];

  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-destructive/5 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-destructive/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-destructive/30 px-4 py-1.5 mb-8 text-sm">
            <span className="text-destructive font-medium">Critical Issues</span>
            <div className="mx-2 h-4 w-[1px] bg-destructive/30" />
            <span className="text-muted-foreground">Affecting 80% of Businesses</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Common Infrastructure Challenges</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why traditional cloud infrastructure falls short of modern business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-destructive/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-destructive/10 text-destructive transition-all duration-300 group-hover:bg-destructive group-hover:text-destructive-foreground">
                      {point.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                        <p className="text-muted-foreground">{point.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center text-sm text-destructive">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          {point.impact}
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-sm text-muted-foreground">
                          {point.stats.label}
                        </div>
                        <div className="text-2xl font-bold gradient-text">
                          {point.stats.value}
                        </div>
                      </div>
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
          className="mt-16 p-8 rounded-xl border bg-background/50 backdrop-blur-sm text-center"
        >
          <p className="text-lg font-medium mb-2">
            Ready to overcome these challenges?
          </p>
          <p className="text-muted-foreground">
            Discover how DeepCloud's innovative solutions address each of these pain points.
          </p>
        </motion.div>
      </div>
    </section>
  );
}