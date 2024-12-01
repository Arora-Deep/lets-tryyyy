"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Monitor, Database, Layout } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(64, 224, 208, 0.15), transparent 60%)",
            opacity
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(123, 104, 238, 0.15), transparent 60%)",
            opacity
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 70%, rgba(255, 105, 180, 0.15), transparent 60%)",
            opacity
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left space-y-8"
          >
            {/* Title with Animated Gradient */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-7xl font-bold leading-tight"
                style={{ scale }}
              >
                <span>Power Your Future with{' '}</span>
                <span className="relative inline-block">
                  <span className="relative z-10 gradient-text">Cloud Innovation</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-primary/10 -z-10 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Experience the next evolution of cloud computing with
                enterprise-grade performance and security
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gradient-border group" asChild>
                <Link href="/pricing">
                  View Pricing
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "24/7", label: "Expert Support" },
                { value: "70%", label: "Cost Savings" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interactive 3D Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px]">
              {/* 3D Floating Elements */}
              {[
                { 
                  icon: <Server className="h-6 w-6" />,
                  title: "Virtual Servers",
                  position: "top-0 left-0",
                  delay: 0.4,
                  gradient: "from-[#40E0D0] to-[#7B68EE]"
                },
                {
                  icon: <Monitor className="h-6 w-6" />,
                  title: "Cloud Desktops",
                  position: "top-1/4 right-0",
                  delay: 0.6,
                  gradient: "from-[#7B68EE] to-[#FF69B4]"
                },
                {
                  icon: <Database className="h-6 w-6" />,
                  title: "Cloud Storage",
                  position: "bottom-1/4 left-0",
                  delay: 0.8,
                  gradient: "from-[#FF69B4] to-[#40E0D0]"
                },
                {
                  icon: <Layout className="h-6 w-6" />,
                  title: "App Publishing",
                  position: "bottom-0 right-0",
                  delay: 1,
                  gradient: "from-[#40E0D0] to-[#7B68EE]"
                }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20, rotateX: 45, rotateY: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                  transition={{ 
                    delay: card.delay,
                    duration: 1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`absolute ${card.position} w-64 transform hover:-translate-y-1 transition-transform duration-300`}
                >
                  <div className="relative p-1 rounded-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 rounded-2xl blur-sm`} />
                    <div className="relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border shadow-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient} text-white`}>
                          {card.icon}
                        </div>
                        <h3 className="font-semibold">{card.title}</h3>
                      </div>
                      <motion.div
                        className="h-1 w-full bg-gradient-to-r from-primary/20 to-primary/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: card.delay + 0.5, duration: 1 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Center Element */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 1, type: "spring" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-32 h-32">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="absolute inset-2 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm font-medium gradient-text">DeepCloud</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-muted-foreground">Scroll to explore</div>
          <motion.div
            className="w-1 h-12 rounded-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}