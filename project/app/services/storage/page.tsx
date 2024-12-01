"use client";

import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { PerformanceComparison } from '@/components/services/performance-comparison';
import { StorageDetailsSection } from '@/components/services/storage-details';
import { ScalabilitySection } from '@/components/services/scalability';
import { ServiceContactSection } from '@/components/services/contact-section';

export default function StorageServicePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <ServiceHero slug="storage" />
      <StorageDetailsSection />
      <ScalabilitySection slug="storage" />
      <ServiceFeatures slug="storage" />
      <PerformanceComparison slug="storage" />
      <ServiceContactSection />
    </div>
  );
}