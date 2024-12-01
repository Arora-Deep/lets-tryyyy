"use client";

import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { TechnicalSpecs } from '@/components/services/technical-specs';
import { PerformanceComparison } from '@/components/services/performance-comparison';
import { PricingCalculator } from '@/components/services/pricing-calculator';

export default function PlatformServicePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <ServiceHero slug="platform" />
      <ServiceFeatures slug="platform" />
      <PerformanceComparison slug="platform" />
      <PricingCalculator slug="platform" />
      <TechnicalSpecs slug="platform" />
    </div>
  );
}