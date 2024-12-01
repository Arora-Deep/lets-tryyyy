"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users,
  Shield,
  BarChart,
  Settings
} from 'lucide-react';

interface ServiceFeaturesProps {
  slug: string;
}

export function ServiceFeatures({ slug }: ServiceFeaturesProps) {
  if (slug !== 'publishing') return null;

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Role-Based Access",
      description: "Automatically deliver the right applications to the right users based on their roles and departments"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Regular updates and world-class security software help maintain top-notch privacy and security"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Usage Analytics",
      description: "Track application usage, license utilization, and user activity patterns by role and department"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Granular Control",
      description: "Fine-tune access permissions, application settings, and security policies for each role"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Role-Based Application Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensure users only access the applications they need for their specific roles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}