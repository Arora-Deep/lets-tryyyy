"use client";

import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { PerformanceComparison } from '@/components/services/performance-comparison';
import { PublishingDetailsSection } from '@/components/services/publishing-details';
import { ScalabilitySection } from '@/components/services/scalability';
import { ServiceContactSection } from '@/components/services/contact-section';

export default function PublishingServicePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <ServiceHero slug="publishing" />
      <PublishingDetailsSection />
      <ScalabilitySection slug="publishing" />
      <ServiceFeatures slug="publishing" />
      <PerformanceComparison slug="publishing" />
      <ServiceContactSection />
    </div>
  );
}