"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CustomerLogos() {
  const logos = [
    {
      name: "Wings of Fire",
      logo: "/logos/wings-of-fire.png"
    },
    {
      name: "NIIT",
      logo: "/logos/niit.png"
    },
    {
      name: "Royal Arabian",
      logo: "/logos/royal-arabian.png"
    },
    {
      name: "TimePro",
      logo: "/logos/timepro.png"
    },
    {
      name: "StripeData",
      logo: "/logos/stripedata.png"
    }
  ];

  return (
    <section className="py-12 bg-background border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold mb-2">Trusted By Leading Businesses</h2>
          <p className="text-muted-foreground">Companies that rely on our cloud solutions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}