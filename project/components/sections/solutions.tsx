"use client";

import { motion } from 'framer-motion';
import { DollarSign, Sliders, Gauge, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Transparent Pricing",
    challenge: "Unpredictable cloud costs with hidden fees",
    impact: "40% of businesses exceed cloud budgets",
    solution: "Clear, predictable pricing with no hidden costs",
    benefits: [
      "Pay-as-you-go model",
      "Real-time cost tracking",
      "Resource optimization",
      "Budget alerts"
    ],
    metric: {
      value: "35%",
      label: "Average Cost Savings"
    },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    gradient: "from-[#40E0D0] to-[#7B68EE]"
  },
  {
    icon: <Sliders className="h-6 w-6" />,
    title: "Simplified Management",
    challenge: "Complex infrastructure requiring extensive expertise",
    impact: "30+ hours per week on maintenance",
    solution: "Intuitive controls and automated workflows",
    benefits: [
      "One-click deployments",
      "Automated maintenance",
      "Visual infrastructure",
      "Smart automation"
    ],
    metric: {
      value: "75%",
      label: "Time Saved"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    gradient: "from-[#7B68EE] to-[#FF69B4]"
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Enhanced Performance",
    challenge: "Performance bottlenecks during peak loads",
    impact: "35% performance drop during high traffic",
    solution: "Lightning-fast infrastructure that scales",
    benefits: [
      "Global edge network",
      "Auto-scaling resources",
      "Load balancing",
      "Real-time monitoring"
    ],
    metric: {
      value: "3.5x",
      label: "Performance Boost"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    gradient: "from-[#FF69B4] to-[#40E0D0]"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    challenge: "Increasing security threats and vulnerabilities",
    impact: "47% rise in security incidents YoY",
    solution: "Military-grade security and compliance",
    benefits: [
      "Zero-trust architecture",
      "24/7 monitoring",
      "Automated compliance",
      "Data encryption"
    ],
    metric: {
      value: "A+",
      label: "Security Rating"
    },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    gradient: "from-[#40E0D0] to-[#7B68EE]"
  }
];

export function SolutionsSection() {
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
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-8 text-sm">
            <span className="gradient-text font-medium">Solutions</span>
            <div className="mx-2 h-4 w-[1px] bg-border" />
            <span className="text-muted-foreground">Challenges Solved</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Transforming Challenges into Advantages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we solve the most critical infrastructure challenges
          </p>
        </motion.div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.gradient} text-white`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid gap-6">
                    <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold mb-2 text-destructive">The Challenge</h4>
                      <p className="text-muted-foreground">{solution.challenge}</p>
                      <div className="mt-2 text-sm text-destructive font-medium">
                        Impact: {solution.impact}
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Our Solution</h4>
                      <p className="text-muted-foreground">{solution.solution}</p>
                      <ul className="mt-4 grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold gradient-text">
                      {solution.metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {solution.metric.label}
                    </div>
                  </div>

                  <Button variant="ghost" className="group">
                    Learn More
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </motion.svg>
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}`}>
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden gradient-border glow">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10`} />
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < solutions.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="w-px bg-gradient-to-b from-border to-transparent"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}