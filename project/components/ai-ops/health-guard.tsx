"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle,
  Shield,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export function HealthGuard() {
  const healthChecks = [
    {
      name: "System Performance",
      status: "healthy",
      message: "All systems operating normally",
      timestamp: "2 minutes ago",
    },
    {
      name: "Security Status",
      status: "warning",
      message: "Updates available for 2 components",
      timestamp: "15 minutes ago",
    },
    {
      name: "Resource Utilization",
      status: "critical",
      message: "High memory usage detected",
      timestamp: "5 minutes ago",
    },
    {
      name: "Network Health",
      status: "healthy",
      message: "Network latency within normal range",
      timestamp: "1 minute ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "critical":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge variant="default">Healthy</Badge>;
      case "warning":
        return <Badge variant="secondary">Warning</Badge>;
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>HealthGuard™</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {healthChecks.map((check) => (
            <div
              key={check.name}
              className="flex items-start justify-between p-3 rounded-lg bg-muted/50"
            >
              <div className="flex items-start space-x-3">
                {getStatusIcon(check.status)}
                <div>
                  <div className="font-medium">{check.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {check.message}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Last checked: {check.timestamp}
                  </div>
                </div>
              </div>
              {getStatusBadge(check.status)}
            </div>
          ))}

          <Button className="w-full" variant="outline">
            View Detailed Report
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}