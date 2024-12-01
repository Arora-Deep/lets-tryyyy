"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceType } from '@/types/services';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link href={service.href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <Card className="relative overflow-hidden border-0 bg-gradient-to-b bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className={`absolute inset-0 bg-gradient-to-br opacity-[0.08] group-hover:opacity-[0.12] transition-opacity ${service.gradient}`} />
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Service Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-primary mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits & Pricing */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Benefits</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm">
                        <Zap className="h-4 w-4 text-primary mr-2 shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-muted/50 text-center">
                  <div className="text-sm text-muted-foreground">Starting at</div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {service.pricing.starting}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.pricing.period}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="lg:col-span-4">
                <div className="h-full flex flex-col">
                  <div className="flex-1 p-6 rounded-xl bg-muted/50">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6">
                      "{service.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Image
                        src={service.testimonial.avatar}
                        alt={service.testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{service.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {service.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6 w-full group" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}