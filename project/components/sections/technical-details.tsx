"use client";

import { motion } from 'framer-motion';
import { Terminal, Code2, GitBranch, Cpu } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export function TechnicalDetails() {
  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "RESTful API",
      description: "Comprehensive API for full infrastructure management",
      code: `curl -X POST https://api.deepcloud.com/v1/instances \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "type": "vps",
    "size": "2xlarge",
    "region": "us-east"
  }'`
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "SDKs & Libraries",
      description: "Native SDKs for popular programming languages",
      code: `// Node.js Example
const deepcloud = require('deepcloud-sdk');
const client = new deepcloud.Client({ apiKey: 'YOUR_API_KEY' });

await client.instances.create({
  type: 'vps',
  size: '2xlarge',
  region: 'us-east'
});`
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "CI/CD Integration",
      description: "Seamless integration with popular CI/CD platforms",
      code: `# GitHub Actions Example
name: Deploy to DeepCloud
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: deepcloud/deploy-action@v1
        with:
          api-key: \${{ secrets.DEEPCLOUD_API_KEY }}
          app-id: your-app-id`
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Infrastructure as Code",
      description: "Define infrastructure using Terraform or CloudFormation",
      code: `# Terraform Example
resource "deepcloud_instance" "web" {
  count  = 3
  type   = "vps"
  size   = "2xlarge"
  region = "us-east"
  
  tags = {
    Environment = "production"
    Service     = "web"
  }
}`
    }
  ];

  return (
    <section id="technical" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Excellence</h2>
          <p className="text-lg text-muted-foreground">
            Built for developers, by developers
          </p>
        </motion.div>

        <Tabs defaultValue="api" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="sdk">SDKs</TabsTrigger>
            <TabsTrigger value="cicd">CI/CD</TabsTrigger>
            <TabsTrigger value="iac">Infrastructure</TabsTrigger>
          </TabsList>

          {features.map((feature, index) => (
            <TabsContent key={index} value={feature.title.toLowerCase().replace(/\s+/g, '')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                      <code className="text-sm">{feature.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}