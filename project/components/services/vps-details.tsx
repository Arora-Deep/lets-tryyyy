"use client";

import { motion } from 'framer-motion';
import { Server, HeartHandshake, Zap, Database, Code, Building2, Network, Clock } from 'lucide-react';

export function VPSDetailsSection() {
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
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Virtual Private Servers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-performance VPS solutions designed for modern business needs
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
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Hardware</h3>
              <p className="text-muted-foreground mb-6">
                Powered by the latest generation AMD EPYC and Intel Xeon processors, combined with NVMe storage for unparalleled performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Processing Power</div>
                  <div className="text-sm text-muted-foreground">Up to 96 vCPU cores with dedicated resource allocation</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Memory</div>
                  <div className="text-sm text-muted-foreground">Up to 384GB RAM with guaranteed allocation</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Storage</div>
                  <div className="text-sm text-muted-foreground">NVMe SSD storage with up to 15,000 IOPS</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Network</div>
                  <div className="text-sm text-muted-foreground">Dual redundant 100Gbps clustered storage network</div>
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
                Dedicated support team available 24/7 to ensure your infrastructure runs smoothly and efficiently.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">24/7 Expert Support</div>
                    <div className="text-sm text-muted-foreground">Round-the-clock access to our team of certified cloud engineers</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Dedicated Account Manager</div>
                    <div className="text-sm text-muted-foreground">Personal point of contact for all your infrastructure needs</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Priority Response</div>
                    <div className="text-sm text-muted-foreground">15-minute response time guarantee for critical issues</div>
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
                    <Network className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Web Applications</h4>
                  </div>
                  <p className="text-muted-foreground">Host high-traffic websites and web applications with guaranteed resources and automatic scaling.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Database Hosting</h4>
                  </div>
                  <p className="text-muted-foreground">Run mission-critical databases with high-performance NVMe storage and dedicated resources.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Development & Testing</h4>
                  </div>
                  <p className="text-muted-foreground">Create isolated development environments with instant provisioning and snapshot capabilities.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Enterprise Applications</h4>
                  </div>
                  <p className="text-muted-foreground">Deploy enterprise applications with guaranteed uptime and dedicated support.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}