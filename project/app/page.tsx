"use client";

import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { SecurityMetrics } from '@/components/sections/security-metrics';
import { CustomerLogos } from '@/components/sections/customer-logos';
import { ContactSection } from '@/components/sections/contact';
import { PricePerformanceGraph } from '@/components/sections/price-performance';
import { ProblemsSolutions } from '@/components/sections/problems-solutions';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BlogCaseStudies } from '@/components/sections/blog-case-studies';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CustomerLogos />
      <SecurityMetrics />
      <PricePerformanceGraph />
      <ProblemsSolutions />
      <ServicesSection />
      <TestimonialsSection />
      <BlogCaseStudies />
      <ContactSection />
    </main>
  );
}