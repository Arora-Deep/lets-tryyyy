"use client";

import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { PerformanceComparison } from '@/components/services/performance-comparison';
import { DaaSDetailsSection } from '@/components/services/daas-details';
import { ScalabilitySection } from '@/components/services/scalability';
import { ServiceContactSection } from '@/components/services/contact-section';

export default function DaaSServicePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <ServiceHero slug="daas" />
      <DaaSDetailsSection />
      <ScalabilitySection slug="daas" />
      <ServiceFeatures slug="daas" />
      <PerformanceComparison slug="daas" />
      <ServiceContactSection />
    </div>
  );
}