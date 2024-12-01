"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';

export default function StatusPage() {
  const services = [
    {
      name: "Virtual Private Servers",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "30 days ago"
    },
    {
      name: "Desktop as a Service",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "45 days ago"
    },
    {
      name: "Cloud Storage",
      status: "degraded",
      uptime: "99.90%",
      lastIncident: "5 minutes ago"
    },
    {
      name: "Application Publishing",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "60 days ago"
    },
    {
      name: "API Services",
      status: "maintenance",
      uptime: "99.95%",
      lastIncident: "2 hours ago"
    }
  ];

  const incidents = [
    {
      date: "2024-03-20",
      title: "Network Latency Issues",
      status: "resolved",
      duration: "45 minutes",
      description: "Increased network latency affecting some regions. Issue has been resolved."
    },
    {
      date: "2024-03-15",
      title: "Storage Performance Degradation",
      status: "resolved",
      duration: "2 hours",
      description: "Storage performance issues affecting some customers. Root cause identified and fixed."
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Operational
          </Badge>
        );
      case "degraded":
        return (
          <Badge variant="secondary" className="bg-yellow-500">
            <AlertTriangle className="h-4 w-4 mr-1" />
            Degraded
          </Badge>
        );
      case "maintenance":
        return (
          <Badge variant="outline">
            <Clock className="h-4 w-4 mr-1" />
            Maintenance
          </Badge>
        );
      default:
        return (
          <Badge variant="destructive">
            <XCircle className="h-4 w-4 mr-1" />
            Outage
          </Badge>
        );
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Status Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-muted-foreground">
              Current status of DeepCloud services
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Services Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between p-4 rounded-lg border"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            <span>Uptime: {service.uptime}</span>
                            <span className="mx-2">•</span>
                            <span>Last incident: {service.lastIncident}</span>
                          </div>
                        </div>
                        {getStatusBadge(service.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Incidents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Incidents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {incidents.map((incident) => (
                      <div
                        key={incident.date}
                        className="p-4 rounded-lg border space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{incident.title}</h3>
                          <Badge variant="outline">
                            Duration: {incident.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {incident.description}
                        </p>
                        <div className="text-sm text-muted-foreground">
                          {incident.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}