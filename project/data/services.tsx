import { Server, Monitor, Database, Layout } from 'lucide-react';
import { ServiceType } from '@/types/services';

export const services: ServiceType[] = [
  {
    icon: <Server className="h-8 w-8" />,
    title: "Virtual Private Servers",
    description: "High-performance VPS with enterprise-grade security for mission-critical workloads.",
    features: [
      "High Performance",
      "Enterprise Security",
      "24/7 Support",
      "Full Control"
    ],
    benefits: [
      "3x Faster Performance",
      "40% Cost Savings",
      "99.99% Uptime SLA"
    ],
    pricing: {
      starting: "$48",
      period: "per month"
    },
    href: "/services/vps",
    gradient: "from-[#40E0D0] to-[#7B68EE]",
    testimonial: {
      quote: "DeepCloud VPS transformed our infrastructure with immediate performance improvements and cost savings.",
      author: "Sarah Chen",
      role: "CTO at TechScale",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    }
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Desktop as a Service",
    description: "Secure virtual desktops with enterprise-grade performance and security, accessible from anywhere.",
    features: [
      "High Performance",
      "Enterprise Security",
      "Native Feel",
      "User Monitoring"
    ],
    benefits: [
      "Zero Setup Time",
      "50% IT Cost Reduction",
      "Enterprise Security"
    ],
    pricing: {
      starting: "$25",
      period: "per user/mo"
    },
    href: "/services/daas",
    gradient: "from-[#7B68EE] to-[#FF69B4]",
    testimonial: {
      quote: "Our remote team's productivity skyrocketed after switching to DeepCloud DaaS. The performance is incredible.",
      author: "Michael Torres",
      role: "IT Director at RemoteFirst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    }
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Cloud Storage",
    description: "Scalable storage solutions with advanced data protection and global edge network distribution.",
    features: [
      "Object Storage",
      "Block Storage",
      "File Systems",
      "Backup & Recovery"
    ],
    benefits: [
      "Infinite Scaling",
      "Automated Backups",
      "Easy Management"
    ],
    pricing: {
      starting: "$0.01",
      period: "per GB/mo"
    },
    href: "/services/storage",
    gradient: "from-[#FF69B4] to-[#40E0D0]",
    testimonial: {
      quote: "DeepCloud Storage handles our massive data needs effortlessly. The reliability is unmatched.",
      author: "Emily Rodriguez",
      role: "Data Engineer at DataFlow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
    }
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Application Publishing",
    description: "Role-based application delivery ensuring secure and efficient software access across your organization.",
    features: [
      "Role-Based Access",
      "Enterprise Security",
      "Usage Analytics",
      "Granular Control"
    ],
    benefits: [
      "Enhanced Security",
      "Simplified Management",
      "Cost Optimization"
    ],
    pricing: {
      starting: "$15",
      period: "per user/mo"
    },
    href: "/services/publishing",
    gradient: "from-[#40E0D0] to-[#7B68EE]",
    testimonial: {
      quote: "DeepCloud's application delivery has streamlined our software distribution and improved security.",
      author: "Alex Kim",
      role: "IT Manager at GlobalTech",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100"
    }
  }
];