"use client";

import { motion } from 'framer-motion';
import { Database, Shield, Zap, HardDrive, Cloud, Scale, HeartHandshake } from 'lucide-react';

export function StorageDetailsSection() {
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
          <h2 className="text-3xl font-bold mb-4">Enterprise Cloud Storage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable, secure, and high-performance storage solutions for your business
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
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Storage</h3>
              <p className="text-muted-foreground mb-6">
                Reliable storage solutions with flexible scaling options and comprehensive data management features.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Scalability</div>
                  <div className="text-sm text-muted-foreground">Easily scale storage as needed</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Backup Options</div>
                  <div className="text-sm text-muted-foreground">Regular automated backups</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Monitoring</div>
                  <div className="text-sm text-muted-foreground">Real-time storage monitoring</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Management</div>
                  <div className="text-sm text-muted-foreground">Easy-to-use control panel</div>
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
                Expert support and guidance for your storage infrastructure.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">24/7 Storage Experts</div>
                    <div className="text-sm text-muted-foreground">Direct access to storage infrastructure specialists</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Migration Support</div>
                    <div className="text-sm text-muted-foreground">Assistance with data migration and optimization</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Proactive Monitoring</div>
                    <div className="text-sm text-muted-foreground">24/7 monitoring and issue prevention</div>
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
                    <HardDrive className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Data Backup</h4>
                  </div>
                  <p className="text-muted-foreground">Secure and reliable backup storage with instant recovery capabilities.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Content Distribution</h4>
                  </div>
                  <p className="text-muted-foreground">Global content delivery with edge caching and acceleration.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Database Storage</h4>
                  </div>
                  <p className="text-muted-foreground">High-performance storage optimized for database workloads.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Big Data Analytics</h4>
                  </div>
                  <p className="text-muted-foreground">Scalable storage solutions for big data and analytics workloads.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}