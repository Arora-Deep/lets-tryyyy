"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Cloud Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with our cutting-edge cloud services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={service.href}>
                <div className="relative h-full">
                  {/* Main Card */}
                  <div className="relative h-full rounded-3xl border bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Service Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <div className="text-lg font-semibold text-primary mt-1">
                            {service.pricing.starting}/{service.pricing.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-8">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature) => (
                          <div 
                            key={feature}
                            className="flex items-center p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/20 transition-colors"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-2`} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <div 
                            key={benefit}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${service.gradient} mr-2`} />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="absolute bottom-8 right-8">
                        <Button variant="ghost" className="group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="gradient-bg" asChild>
            <Link href="/pricing">
              View Detailed Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}