"use client";

import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#40E0D0]/10 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-[#FF69B4]/10 blur-[100px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Your
            <br />
            <span className="gradient-text">Cloud Infrastructure</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our enterprise team is ready to help you architect the perfect solution for your business needs
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              24/7 Enterprise Support
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              Custom Solutions
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              Dedicated Account Manager
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}