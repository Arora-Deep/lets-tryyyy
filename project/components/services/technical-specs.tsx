"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TechnicalSpecsProps {
  slug: string;
}

export function TechnicalSpecs({ slug }: TechnicalSpecsProps) {
  const specs = [
    {
      category: "Compute",
      details: [
        "Up to 96 vCPU cores",
        "Up to 384GB RAM",
        "Latest Gen Intel/AMD processors",
        "GPU options available",
        "Dedicated CPU mode",
        "Live vertical scaling"
      ]
    },
    {
      category: "Storage",
      details: [
        "NVMe SSD storage",
        "Up to 7.68TB per volume",
        "RAID 10 configuration",
        "Automated backups",
        "Block storage options",
        "Data encryption"
      ]
    },
    {
      category: "Network",
      details: [
        "40Gbps network interfaces",
        "Private networking",
        "IPv4 and IPv6 support",
        "DDoS protection",
        "Load balancing",
        "CDN integration"
      ]
    },
    {
      category: "Management",
      details: [
        "User access controls",
        "Network monitoring",
        "Firewall management",
        "Activity logging",
        "Resource tracking",
        "Performance analytics"
      ]
    }
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
          <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-performance infrastructure built for modern workloads
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {specs.map((spec, index) => (
              <AccordionItem key={spec.category} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">
                  {spec.category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    {spec.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}