"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shield, Monitor, BarChart } from 'lucide-react';

export function RoleBasedAccess() {
  const roles = [
    {
      title: "Finance Department",
      icon: <Users className="h-6 w-6" />,
      applications: [
        { name: "QuickBooks", description: "Accounting & Bookkeeping" },
        { name: "Sage", description: "Financial Management" },
        { name: "Xero", description: "Cloud Accounting" },
        { name: "Excel", description: "Financial Analysis" }
      ]
    },
    {
      title: "Sales Team",
      icon: <Monitor className="h-6 w-6" />,
      applications: [
        { name: "Salesforce", description: "CRM Platform" },
        { name: "HubSpot", description: "Sales & Marketing" },
        { name: "Zoom", description: "Video Conferencing" },
        { name: "Slack", description: "Team Communication" }
      ]
    },
    {
      title: "HR Department",
      icon: <Shield className="h-6 w-6" />,
      applications: [
        { name: "Workday", description: "HR Management" },
        { name: "BambooHR", description: "Personnel Management" },
        { name: "ADP", description: "Payroll & Benefits" },
        { name: "Teams", description: "Collaboration" }
      ]
    },
    {
      title: "IT Department",
      icon: <BarChart className="h-6 w-6" />,
      applications: [
        { name: "ServiceNow", description: "IT Service Management" },
        { name: "Jira", description: "Project Tracking" },
        { name: "GitHub", description: "Code Repository" },
        { name: "Azure DevOps", description: "Development Platform" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Role-Based Application Access</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Users only see and access the applications relevant to their role
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {role.applications.map((app) => (
                      <div key={app.name} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <div>
                          <div className="font-medium">{app.name}</div>
                          <div className="text-sm text-muted-foreground">{app.description}</div>
                        </div>
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
          className="mt-16 p-8 rounded-xl border bg-muted/50 text-center"
        >
          <p className="text-lg mb-2">
            Streamline application access and enhance security with role-based delivery
          </p>
          <p className="text-muted-foreground">
            Automatically provision and deprovision applications based on user roles and departments
          </p>
        </motion.div>
      </div>
    </section>
  );
}