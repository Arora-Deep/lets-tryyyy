"use client";

import { motion } from 'framer-motion';
import { Layout, Shield, Users, Settings, Lock, Globe, HeartHandshake } from 'lucide-react';

export function PublishingDetailsSection() {
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
          <h2 className="text-3xl font-bold mb-4">Enterprise Application Publishing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure and efficient application delivery for your organization
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
                <Layout className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Control</h3>
              <p className="text-muted-foreground mb-6">
                Advanced application delivery and management platform for enterprise environments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Access Control</div>
                  <div className="text-sm text-muted-foreground">Role-based application delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Monitoring</div>
                  <div className="text-sm text-muted-foreground">Real-time usage analytics</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Security</div>
                  <div className="text-sm text-muted-foreground">Zero-trust security model</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Updates</div>
                  <div className="text-sm text-muted-foreground">Automated patch management</div>
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
                Comprehensive support for your application delivery infrastructure.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Application Experts</div>
                    <div className="text-sm text-muted-foreground">Dedicated team for application delivery support</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Implementation Support</div>
                    <div className="text-sm text-muted-foreground">Assistance with deployment and configuration</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                  <div>
                    <div className="font-medium">Continuous Optimization</div>
                    <div className="text-sm text-muted-foreground">Regular performance reviews and optimization</div>
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
                    <h4 className="text-xl font-semibold">Enterprise Teams</h4>
                  </div>
                  <p className="text-muted-foreground">Streamline application access for large organizations with role-based delivery.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Secure Access</h4>
                  </div>
                  <p className="text-muted-foreground">Ensure compliance with granular access controls and security policies.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">IT Management</h4>
                  </div>
                  <p className="text-muted-foreground">Centralize application management and reduce administrative overhead.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Remote Access</h4>
                  </div>
                  <p className="text-muted-foreground">Enable secure application access from anywhere in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}