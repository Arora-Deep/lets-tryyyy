"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

const services = [
  {
    name: "Compute Services",
    status: "operational",
    lastIncident: "30 days ago",
    uptime: "99.99%",
  },
  {
    name: "Storage Services",
    status: "operational",
    lastIncident: "45 days ago",
    uptime: "99.95%",
  },
  {
    name: "Network Services",
    status: "degraded",
    lastIncident: "5 minutes ago",
    uptime: "99.90%",
  },
  {
    name: "API Services",
    status: "maintenance",
    lastIncident: "2 hours ago",
    uptime: "99.95%",
  },
];

const incidents = [
  {
    date: "2024-03-20",
    title: "Network Latency Issues",
    status: "resolved",
    duration: "45 minutes",
  },
  {
    date: "2024-03-15",
    title: "Storage Performance Degradation",
    status: "resolved",
    duration: "2 hours",
  },
];

export function SystemStatus() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle className="h-4 w-4 mr-1" />
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
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-4 rounded-lg border bg-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{service.name}</h3>
                  {getStatusBadge(service.status)}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Last Incident:</span>
                    <span>{service.lastIncident}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Uptime:</span>
                    <span>{service.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-medium mb-4">Recent Incidents</h3>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div
                  key={incident.title}
                  className="p-4 rounded-lg border bg-card"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{incident.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {incident.date}
                      </p>
                    </div>
                    <Badge variant="outline">
                      Duration: {incident.duration}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}