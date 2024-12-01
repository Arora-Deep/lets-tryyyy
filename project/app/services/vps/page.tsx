"use client";

import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { PerformanceComparison } from '@/components/services/performance-comparison';
import { VPSDetailsSection } from '@/components/services/vps-details';
import { ScalabilitySection } from '@/components/services/scalability';
import { ServiceContactSection } from '@/components/services/contact-section';

export default function VPSServicePage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <ServiceHero slug="vps" />
      <PerformanceComparison slug="vps" />
      <VPSDetailsSection />
      <ScalabilitySection slug="vps" />
      <ServiceFeatures slug="vps" />
      <ServiceContactSection />
    </main>
  );
}