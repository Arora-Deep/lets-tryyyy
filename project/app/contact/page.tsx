"use client";

import { ContactHero } from '@/components/contact/hero';
import { ContactForm } from '@/components/contact/form';
import { SupportOptions } from '@/components/contact/support-options';
import { EnterpriseFeatures } from '@/components/contact/enterprise-features';
import { FAQ } from '@/components/contact/faq';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <ContactHero />
      <ContactForm />
      <SupportOptions />
      <EnterpriseFeatures />
      <FAQ />
    </main>
  );
}