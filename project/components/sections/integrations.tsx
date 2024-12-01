"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function IntegrationsSection() {
  const categories = [
    {
      title: "DevOps Tools",
      tools: ["GitHub", "GitLab", "Jenkins", "CircleCI", "Travis CI", "ArgoCD"]
    },
    {
      title: "Monitoring",
      tools: ["Datadog", "New Relic", "Grafana", "Prometheus", "ELK Stack", "Splunk"]
    },
    {
      title: "Security",
      tools: ["Vault", "CloudFlare", "Auth0", "Okta", "CrowdStrike", "Snyk"]
    },
    {
      title: "Databases",
      tools: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Elasticsearch", "Cassandra"]
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
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite tools and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.tools.map((tool) => (
                      <div
                        key={tool}
                        className="p-3 text-sm text-center rounded-lg border bg-background"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="outline" className="gradient-border glow">
            View All Integrations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}