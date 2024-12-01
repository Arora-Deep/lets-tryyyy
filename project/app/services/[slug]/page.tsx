"use client";

import { useParams } from 'next/navigation';
import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { TechnicalSpecs } from '@/components/services/technical-specs';
import { DemoPlatform } from '@/components/services/demo-platform';
import { SuccessStories } from '@/components/services/success-stories';
import { PricingCalculator } from '@/components/services/pricing-calculator';
import { PerformanceMetrics } from '@/components/services/performance-metrics';
import { OrderWizard } from '@/components/services/order-wizard';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero slug={slug} />
      <ServiceFeatures slug={slug} />
      <TechnicalSpecs slug={slug} />
      <DemoPlatform slug={slug} />
      <SuccessStories slug={slug} />
      <PricingCalculator slug={slug} />
      <PerformanceMetrics slug={slug} />
      <OrderWizard slug={slug} />
    </div>
  );
}