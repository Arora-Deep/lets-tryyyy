"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Server, Monitor, Database, Layout } from 'lucide-react';

export default function PricingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Sticky Navigation */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto py-4 no-scrollbar">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('standard-vps')}
              className="whitespace-nowrap"
            >
              <Server className="h-4 w-4 mr-2" />
              Standard VPS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('premium-vps')}
              className="whitespace-nowrap"
            >
              <Server className="h-4 w-4 mr-2" />
              Premium VPS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('windows-vps')}
              className="whitespace-nowrap"
            >
              <Server className="h-4 w-4 mr-2" />
              Windows VPS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('daas')}
              className="whitespace-nowrap"
            >
              <Monitor className="h-4 w-4 mr-2" />
              DaaS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('storage')}
              className="whitespace-nowrap"
            >
              <Database className="h-4 w-4 mr-2" />
              Storage
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('app-publishing')}
              className="whitespace-nowrap"
            >
              <Layout className="h-4 w-4 mr-2" />
              App Publishing
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Pay only for the resources you need
          </p>
        </motion.div>

        {/* Standard VPS Pricing */}
        <Card className="mb-8" id="standard-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Standard VPS Plans</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CPU (vCores)</TableHead>
                  <TableHead>RAM (GB)</TableHead>
                  <TableHead>Storage (GB)</TableHead>
                  <TableHead>Price (INR)</TableHead>
                  <TableHead>Price (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { cpu: 1, ram: 0.5, storage: 20, priceInr: 200, priceUsd: 2 },
                  { cpu: 1, ram: 1, storage: 25, priceInr: 350, priceUsd: 4 },
                  { cpu: 1, ram: 2, storage: 30, priceInr: 530, priceUsd: 6 },
                  { cpu: 2, ram: 4, storage: 50, priceInr: 1000, priceUsd: 12 },
                  { cpu: 2, ram: 8, storage: 50, priceInr: 1400, priceUsd: 17 },
                  { cpu: 2, ram: 16, storage: 75, priceInr: 2350, priceUsd: 28 },
                  { cpu: 4, ram: 8, storage: 75, priceInr: 1850, priceUsd: 22 },
                  { cpu: 4, ram: 16, storage: 100, priceInr: 2800, priceUsd: 33 },
                  { cpu: 4, ram: 32, storage: 150, priceInr: 4700, priceUsd: 56 },
                  { cpu: 6, ram: 12, storage: 100, priceInr: 2700, priceUsd: 32 },
                  { cpu: 6, ram: 24, storage: 125, priceInr: 4050, priceUsd: 48 },
                  { cpu: 6, ram: 48, storage: 160, priceInr: 6660, priceUsd: 79 },
                  { cpu: 8, ram: 16, storage: 100, priceInr: 3400, priceUsd: 40 },
                  { cpu: 8, ram: 32, storage: 150, priceInr: 5300, priceUsd: 63 },
                  { cpu: 8, ram: 64, storage: 180, priceInr: 8680, priceUsd: 103 },
                  { cpu: 12, ram: 24, storage: 160, priceInr: 5160, priceUsd: 61 },
                  { cpu: 12, ram: 48, storage: 180, priceInr: 7680, priceUsd: 91 },
                  { cpu: 16, ram: 32, storage: 200, priceInr: 6800, priceUsd: 81 },
                  { cpu: 16, ram: 64, storage: 250, priceInr: 10300, priceUsd: 123 },
                  { cpu: 16, ram: 128, storage: 300, priceInr: 17000, priceUsd: 202 },
                  { cpu: 24, ram: 48, storage: 250, priceInr: 9900, priceUsd: 118 },
                  { cpu: 24, ram: 96, storage: 350, priceInr: 15300, priceUsd: 182 },
                  { cpu: 24, ram: 192, storage: 450, priceInr: 25500, priceUsd: 304 },
                  { cpu: 32, ram: 64, storage: 350, priceInr: 13300, priceUsd: 158 },
                  { cpu: 32, ram: 128, storage: 450, priceInr: 20300, priceUsd: 242 },
                  { cpu: 32, ram: 192, storage: 500, priceInr: 27000, priceUsd: 321 },
                  { cpu: 32, ram: 256, storage: 650, priceInr: 34300, priceUsd: 408 },
                  { cpu: 48, ram: 96, storage: 600, priceInr: 20400, priceUsd: 243 },
                  { cpu: 48, ram: 192, storage: 700, priceInr: 30500, priceUsd: 364 },
                  { cpu: 64, ram: 128, storage: 650, priceInr: 26300, priceUsd: 313 },
                  { cpu: 64, ram: 256, storage: 800, priceInr: 40000, priceUsd: 476 },
                  { cpu: 64, ram: 512, storage: 1000, priceInr: 66800, priceUsd: 795 },
                  { cpu: 96, ram: 192, storage: 1200, priceInr: 40800, priceUsd: 486 },
                  { cpu: 96, ram: 384, storage: 1500, priceInr: 61800, priceUsd: 736 },
                  { cpu: 96, ram: 768, storage: 3000, priceInr: 109200, priceUsd: 1300 }
                ].map((plan) => (
                  <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                    <TableCell>{plan.cpu}</TableCell>
                    <TableCell>{plan.ram}</TableCell>
                    <TableCell>{plan.storage}</TableCell>
                    <TableCell>₹{plan.priceInr}</TableCell>
                    <TableCell>${plan.priceUsd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Premium VPS Pricing */}
        <Card className="mb-8" id="premium-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Premium VPS Plans</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CPU (vCores)</TableHead>
                  <TableHead>RAM (GB)</TableHead>
                  <TableHead>Storage (GB)</TableHead>
                  <TableHead>Price (INR)</TableHead>
                  <TableHead>Price (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { cpu: 1, ram: 0.5, storage: 20, priceInr: 280, priceUsd: 3 },
                  { cpu: 1, ram: 1, storage: 25, priceInr: 530, priceUsd: 6 },
                  { cpu: 1, ram: 2, storage: 30, priceInr: 954, priceUsd: 11 },
                  { cpu: 2, ram: 4, storage: 50, priceInr: 1800, priceUsd: 21 },
                  { cpu: 2, ram: 8, storage: 50, priceInr: 2520, priceUsd: 30 },
                  { cpu: 2, ram: 16, storage: 75, priceInr: 4230, priceUsd: 50 },
                  { cpu: 4, ram: 8, storage: 75, priceInr: 3330, priceUsd: 40 },
                  { cpu: 4, ram: 16, storage: 100, priceInr: 5040, priceUsd: 60 },
                  { cpu: 4, ram: 32, storage: 150, priceInr: 8460, priceUsd: 101 },
                  { cpu: 6, ram: 12, storage: 100, priceInr: 4860, priceUsd: 58 },
                  { cpu: 6, ram: 24, storage: 125, priceInr: 7290, priceUsd: 87 },
                  { cpu: 6, ram: 48, storage: 160, priceInr: 11988, priceUsd: 143 },
                  { cpu: 8, ram: 16, storage: 100, priceInr: 6120, priceUsd: 73 },
                  { cpu: 8, ram: 32, storage: 150, priceInr: 9540, priceUsd: 114 },
                  { cpu: 8, ram: 64, storage: 180, priceInr: 15624, priceUsd: 186 },
                  { cpu: 12, ram: 24, storage: 160, priceInr: 9288, priceUsd: 111 },
                  { cpu: 12, ram: 48, storage: 180, priceInr: 13824, priceUsd: 165 },
                  { cpu: 16, ram: 32, storage: 200, priceInr: 12240, priceUsd: 146 },
                  { cpu: 16, ram: 64, storage: 250, priceInr: 18540, priceUsd: 221 },
                  { cpu: 16, ram: 128, storage: 300, priceInr: 30600, priceUsd: 364 },
                  { cpu: 24, ram: 48, storage: 250, priceInr: 17820, priceUsd: 212 },
                  { cpu: 24, ram: 96, storage: 350, priceInr: 27540, priceUsd: 328 },
                  { cpu: 24, ram: 192, storage: 450, priceInr: 45900, priceUsd: 546 },
                  { cpu: 32, ram: 64, storage: 350, priceInr: 23940, priceUsd: 285 },
                  { cpu: 32, ram: 128, storage: 450, priceInr: 36540, priceUsd: 435 },
                  { cpu: 32, ram: 192, storage: 500, priceInr: 48600, priceUsd: 579 },
                  { cpu: 32, ram: 256, storage: 650, priceInr: 61740, priceUsd: 735 },
                  { cpu: 48, ram: 96, storage: 600, priceInr: 36720, priceUsd: 437 },
                  { cpu: 48, ram: 192, storage: 700, priceInr: 55080, priceUsd: 656 },
                  { cpu: 64, ram: 128, storage: 650, priceInr: 47340, priceUsd: 564 },
                  { cpu: 64, ram: 256, storage: 800, priceInr: 72000, priceUsd: 857 },
                  { cpu: 64, ram: 512, storage: 1000, priceInr: 120240, priceUsd: 1431 },
                  { cpu: 96, ram: 192, storage: 1200, priceInr: 73440, priceUsd: 874 },
                  { cpu: 96, ram: 384, storage: 1500, priceInr: 111240, priceUsd: 1324 },
                  { cpu: 96, ram: 768, storage: 3000, priceInr: 196560, priceUsd: 2340 }
                ].map((plan) => (
                  <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                    <TableCell>{plan.cpu}</TableCell>
                    <TableCell>{plan.ram}</TableCell>
                    <TableCell>{plan.storage}</TableCell>
                    <TableCell>₹{plan.priceInr}</TableCell>
                    <TableCell>${plan.priceUsd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Windows VPS Pricing */}
        <Card className="mb-8" id="windows-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Windows VPS Plans</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CPU (vCores)</TableHead>
                  <TableHead>RAM (GB)</TableHead>
                  <TableHead>Storage (GB)</TableHead>
                  <TableHead>Price (INR)</TableHead>
                  <TableHead>Price (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { cpu: 2, ram: 4, storage: 50, priceInr: 2550, priceUsd: 30 },
                  { cpu: 2, ram: 8, storage: 75, priceInr: 3925, priceUsd: 47 },
                  { cpu: 4, ram: 8, storage: 80, priceInr: 4960, priceUsd: 59 },
                  { cpu: 4, ram: 16, storage: 120, priceInr: 7640, priceUsd: 91 },
                  { cpu: 6, ram: 12, storage: 150, priceInr: 7650, priceUsd: 91 },
                  { cpu: 6, ram: 24, storage: 200, priceInr: 11600, priceUsd: 138 },
                  { cpu: 8, ram: 16, storage: 250, priceInr: 10550, priceUsd: 126 },
                  { cpu: 8, ram: 32, storage: 300, priceInr: 15700, priceUsd: 187 },
                  { cpu: 16, ram: 32, storage: 400, priceInr: 20400, priceUsd: 243 },
                  { cpu: 16, ram: 64, storage: 500, priceInr: 30700, priceUsd: 365 },
                  { cpu: 32, ram: 64, storage: 700, priceInr: 40100, priceUsd: 477 },
                  { cpu: 32, ram: 128, storage: 850, priceInr: 60350, priceUsd: 718 },
                  { cpu: 64, ram: 128, storage: 1000, priceInr: 77400, priceUsd: 921 },
                  { cpu: 64, ram: 256, storage: 1200, priceInr: 117200, priceUsd: 1395 },
                  { cpu: 96, ram: 384, storage: 1500, priceInr: 173700, priceUsd: 2068 }
                ].map((plan) => (
                  <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                    <TableCell>{plan.cpu}</TableCell>
                    <TableCell>{plan.ram}</TableCell>
                    <TableCell>{plan.storage}</TableCell>
                    <TableCell>₹{plan.priceInr}</TableCell>
                    <TableCell>${plan.priceUsd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* DaaS Pricing */}
        <Card className="mb-8" id="daas">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Desktop as a Service Plans</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instance Type</TableHead>
                  <TableHead>Start-up (0-15)</TableHead>
                  <TableHead>Company (15-50)</TableHead>
                  <TableHead>Enterprise (50-200)</TableHead>
                  <TableHead>Behemoth (200+)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: "2vCPU/4GB", startup: 31, company: 34, enterprise: 39, behemoth: "Contact Us" },
                  { type: "4vCPU/8GB", startup: 61, company: 65, enterprise: 69, behemoth: "Contact Us" },
                  { type: "8vCPU/16GB", startup: 139, company: 145, enterprise: 149, behemoth: "Contact Us" },
                  { type: "12vCPU/24GB", startup: 211, company: 215, enterprise: 219, behemoth: "Contact Us" },
                  { type: "16vCPU/32GB", startup: 289, company: 295, enterprise: 299, behemoth: "Contact Us" },
                  { type: "32vCPU/64GB", startup: 520, company: 525, enterprise: 529, behemoth: "Contact Us" }
                ].map((plan) => (
                  <TableRow key={plan.type}>
                    <TableCell>{plan.type}</TableCell>
                    <TableCell>${plan.startup}</TableCell>
                    <TableCell>${plan.company}</TableCell>
                    <TableCell>${plan.enterprise}</TableCell>
                    <TableCell>{plan.behemoth}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Storage Pricing */}
        <Card className="mb-8" id="storage">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Storage Plans</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Storage */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Standard Storage</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Storage (GB)</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Cost (USD)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { storage: 200, users: "1", cost: 60 },
                      { storage: 500, users: "2", cost: 150 },
                      { storage: 2000, users: "3+", cost: 800 },
                      { storage: 3000, users: "5+", cost: 1200 },
                      { storage: 5000, users: "10+", cost: 2000 },
                      { storage: 10000, users: "15+", cost: 4000 },
                      { storage: 20000, users: "20+", cost: 8000 },
                      { storage: 50000, users: "40+", cost: 20000 }
                    ].map((plan) => (
                      <TableRow key={plan.storage}>
                        <TableCell>{plan.storage}</TableCell>
                        <TableCell>{plan.users}</TableCell>
                        <TableCell>${plan.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* NVMe Storage */}
              <div>
                <h3 className="text-xl font-semibold mb-4">NVMe Storage</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Storage (GB)</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Cost (USD)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { storage: 200, users: "1", cost: 108 },
                      { storage: 500, users: "2", cost: 270 },
                      { storage: 2000, users: "3+", cost: 1440 },
                      { storage: 3000, users: "5+", cost: 2160 },
                      { storage: 5000, users: "10+", cost: 3600 },
                      { storage: 10000, users: "15+", cost: 7200 },
                      { storage: 20000, users: "20+", cost: 14400 },
                      { storage: 50000, users: "40+", cost: 36000 }
                    ].map((plan) => (
                      <TableRow key={plan.storage}>
                        <TableCell>{plan.storage}</TableCell>
                        <TableCell>{plan.users}</TableCell>
                        <TableCell>${plan.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Publishing */}
        <Card id="app-publishing">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Application Publishing</h2>
            <div className="text-center p-8 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Us for Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Our application publishing solutions are customized to your specific needs.
                Please contact our sales team for a detailed quote.
              </p>
              <Button size="lg" className="gradient-bg">
                Contact Sales Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}