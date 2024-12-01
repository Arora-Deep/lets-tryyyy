"use client";

import { motion } from 'framer-motion';
import { Monitor, Shield, Zap, Users, Layout, Globe, Clock, HeartHandshake } from 'lucide-react';

export function DaaSDetailsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#40E0D0]/5 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-[#FF69B4]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Enterprise Desktop as a Service</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure, high-performance virtual desktops for the modern workforce
          </p>
        </motion.div>

        {/* Core Features */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#40E0D0] to-[#7B68EE] text-white w-fit mb-6">
                <Monitor className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">High-Performance Desktops</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade virtual desktops powered by the latest hardware for a native-like experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Graphics Performance</div>
                  <div className="text-sm text-muted-foreground">4K display support with hardware acceleration</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Resource Allocation</div>
                  <div className="text-sm text-muted-foreground">Up to 64GB RAM per desktop</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Storage</div>
                  <div className="text-sm text-muted-foreground">NVMe SSD storage with data persistence</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Performance</div>
                  <div className="text-sm text-muted-foreground">Optimized for low-latency access</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#7B68EE] to-[#FF69B4] text-white w-fit mb-6">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Support</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive support to ensure your virtual desktop infrastructure runs smoothly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">24/7 Technical Support</div>
                    <div className="text-sm text-muted-foreground">Round-the-clock access to DaaS specialists</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">User Training</div>
                    <div className="text-sm text-muted-foreground">Comprehensive onboarding and training programs</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Migration Assistance</div>
                    <div className="text-sm text-muted-foreground">Expert help with transitioning to virtual desktops</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl" />
          <div className="relative p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Perfect For Your Use Case</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Remote Teams</h4>
                  </div>
                  <p className="text-muted-foreground">Enable secure remote work with fully managed virtual desktops accessible from anywhere.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Regulated Industries</h4>
                  </div>
                  <p className="text-muted-foreground">Meet compliance requirements with secure, isolated desktop environments.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Layout className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Software Development</h4>
                  </div>
                  <p className="text-muted-foreground">Standardized development environments with powerful compute resources.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Global Workforce</h4>
                  </div>
                  <p className="text-muted-foreground">Support distributed teams with consistent desktop experiences worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}