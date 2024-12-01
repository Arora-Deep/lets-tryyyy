import { ReactNode } from 'react';

export interface ServiceType {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  pricing: {
    starting: string;
    period: string;
  };
  href: string;
  gradient: string;
}