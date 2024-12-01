"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PricingCalculatorProps {
  slug: string;
}

// Standard VPS Pricing
const standardVPSPricing = [
  { cpu: 1, ram: 0.5, storage: 20, price: 1.99 },
  { cpu: 1, ram: 1, storage: 25, price: 3.99 },
  { cpu: 1, ram: 2, storage: 30, price: 5.99 },
  { cpu: 2, ram: 4, storage: 50, price: 12 },
  { cpu: 2, ram: 8, storage: 50, price: 17 },
  { cpu: 2, ram: 16, storage: 75, price: 28 },
  { cpu: 4, ram: 8, storage: 75, price: 22 },
  { cpu: 4, ram: 16, storage: 100, price: 33 },
  { cpu: 4, ram: 32, storage: 150, price: 56 },
  { cpu: 6, ram: 12, storage: 100, price: 32 },
  { cpu: 6, ram: 24, storage: 125, price: 48 },
  { cpu: 6, ram: 48, storage: 160, price: 79 },
  { cpu: 8, ram: 16, storage: 100, price: 40 },
  { cpu: 8, ram: 32, storage: 150, price: 63 },
  { cpu: 8, ram: 64, storage: 180, price: 103 }
];

// Premium VPS Pricing
const premiumVPSPricing = [
  { cpu: 1, ram: 0.5, storage: 20, price: 2.99 },
  { cpu: 1, ram: 1, storage: 25, price: 5.99 },
  { cpu: 1, ram: 2, storage: 30, price: 9.99 },
  { cpu: 2, ram: 4, storage: 50, price: 19.99 },
  { cpu: 2, ram: 8, storage: 50, price: 29.99 },
  { cpu: 2, ram: 16, storage: 75, price: 49.99 },
  { cpu: 4, ram: 8, storage: 75, price: 39.99 },
  { cpu: 4, ram: 16, storage: 100, price: 59.99 },
  { cpu: 4, ram: 32, storage: 150, price: 99.99 },
  { cpu: 6, ram: 12, storage: 100, price: 58 },
  { cpu: 6, ram: 24, storage: 125, price: 87 },
  { cpu: 6, ram: 48, storage: 160, price: 143 },
  { cpu: 8, ram: 16, storage: 100, price: 73 },
  { cpu: 8, ram: 32, storage: 150, price: 114 },
  { cpu: 8, ram: 64, storage: 180, price: 186 }
];

// Windows VPS Pricing
const windowsVPSPricing = [
  { cpu: 2, ram: 4, storage: 50, price: 50 },
  { cpu: 2, ram: 8, storage: 75, price: 47 },
  { cpu: 4, ram: 8, storage: 80, price: 59 },
  { cpu: 4, ram: 16, storage: 120, price: 91 },
  { cpu: 6, ram: 12, storage: 150, price: 91 },
  { cpu: 6, ram: 24, storage: 200, price: 138 },
  { cpu: 8, ram: 16, storage: 250, price: 126 },
  { cpu: 8, ram: 32, storage: 300, price: 187 },
  { cpu: 16, ram: 32, storage: 400, price: 243 },
  { cpu: 16, ram: 64, storage: 500, price: 365 },
  { cpu: 32, ram: 64, storage: 700, price: 477 },
  { cpu: 32, ram: 128, storage: 850, price: 718 },
  { cpu: 64, ram: 128, storage: 1000, price: 921 },
  { cpu: 64, ram: 256, storage: 1200, price: 1395 },
  { cpu: 96, ram: 384, storage: 1500, price: 2068 }
];

// DaaS Pricing
const daasPricing = {
  instances: [
    { name: "2 vCPU 4GB", price: 36 },
    { name: "4 vCPU 8GB", price: 65 },
    { name: "8 vCPU 16GB", price: 149 },
    { name: "12 vCPU 24GB", price: 215 },
    { name: "16 vCPU 32GB", price: 299 },
    { name: "32 vCPU 64GB", price: 525 }
  ]
};

// Storage Pricing
const storagePricing = {
  standard: [
    { size: 200, price: 60 },
    { size: 500, price: 150 },
    { size: 2000, price: 800 },
    { size: 3000, price: 1200 },
    { size: 5000, price: 2000 },
    { size: 10000, price: 4000 },
    { size: 20000, price: 8000 },
    { size: 50000, price: 20000 }
  ],
  nvme: [
    { size: 200, price: 108 },
    { size: 500, price: 270 },
    { size: 2000, price: 1440 },
    { size: 3000, price: 2160 },
    { size: 5000, price: 3600 },
    { size: 10000, price: 7200 },
    { size: 20000, price: 14400 },
    { size: 50000, price: 36000 }
  ]
};

const pricingConfig = {
  vps: {
    title: "VPS Pricing Calculator",
    description: "Choose your VPS configuration",
    types: [
      {
        name: "Standard VPS",
        pricing: standardVPSPricing,
        resources: [
          { name: "CPU Cores", min: 1, max: 8, step: 1 },
          { name: "RAM (GB)", min: 0.5, max: 64, step: 0.5 },
          { name: "Storage (GB)", min: 20, max: 180, step: 5 }
        ]
      },
      {
        name: "Premium VPS",
        pricing: premiumVPSPricing,
        resources: [
          { name: "CPU Cores", min: 1, max: 8, step: 1 },
          { name: "RAM (GB)", min: 0.5, max: 64, step: 0.5 },
          { name: "Storage (GB)", min: 20, max: 180, step: 5 }
        ]
      },
      {
        name: "Windows VPS",
        pricing: windowsVPSPricing,
        resources: [
          { name: "CPU Cores", min: 2, max: 96, step: 2 },
          { name: "RAM (GB)", min: 4, max: 384, step: 4 },
          { name: "Storage (GB)", min: 50, max: 1500, step: 50 }
        ]
      }
    ]
  },
  daas: {
    title: "DaaS Pricing Calculator",
    description: "Calculate your Desktop as a Service costs",
    instances: daasPricing.instances
  },
  storage: {
    title: "Storage Pricing Calculator",
    description: "Calculate your storage costs",
    types: [
      {
        name: "Standard Storage",
        pricing: storagePricing.standard,
        resources: [
          { name: "Storage (GB)", min: 200, max: 50000, step: 100 }
        ]
      },
      {
        name: "NVMe Storage",
        pricing: storagePricing.nvme,
        resources: [
          { name: "Storage (GB)", min: 200, max: 50000, step: 100 }
        ]
      }
    ]
  }
};

export function PricingCalculator({ slug }: PricingCalculatorProps) {
  const config = pricingConfig[slug as keyof typeof pricingConfig];
  const [selectedType, setSelectedType] = useState(0);
  const [values, setValues] = useState<number[]>([]);
  const [isAnnual, setIsAnnual] = useState(false);

  if (!config) return null;

  const calculatePrice = () => {
    let price = 0;
    
    if (slug === 'vps') {
      const type = config.types[selectedType];
      const pricing = type.pricing;
      // Find closest matching configuration
      const match = pricing.reduce((closest, current) => {
        const currentDiff = Math.abs(current.cpu - values[0]) + 
                          Math.abs(current.ram - values[1]) + 
                          Math.abs(current.storage - values[2]);
        const closestDiff = Math.abs(closest.cpu - values[0]) + 
                          Math.abs(closest.ram - values[1]) + 
                          Math.abs(closest.storage - values[2]);
        return currentDiff < closestDiff ? current : closest;
      });
      price = match.price;
    }
    // Add similar logic for DaaS and Storage

    return isAnnual ? price * 12 * 0.8 : price;
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{config.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {config.description}
          </p>
        </motion.div>

        {/* Rest of the calculator UI */}
        {/* Add type selection, sliders for resources, and price display */}
      </div>
    </section>
  );
}