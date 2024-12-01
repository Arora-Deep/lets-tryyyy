"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Bell,
  XCircle,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "critical",
    message: "High CPU usage detected on web-server-01",
    timestamp: "2 minutes ago",
    acknowledged: false,
  },
  {
    id: 2,
    severity: "warning",
    message: "Memory usage above 80% threshold",
    timestamp: "15 minutes ago",
    acknowledged: true,
  },
  {
    id: 3,
    severity: "info",
    message: "Backup completed successfully",
    timestamp: "1 hour ago",
    acknowledged: true,
  },
  // Add more alerts...
];

export function AlertsPanel() {
  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "info":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const getAlertBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "warning":
        return <Badge variant="secondary">Warning</Badge>;
      case "info":
        return <Badge variant="default">Info</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${
                  alert.acknowledged ? "bg-muted/50" : "bg-muted"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.severity)}
                    <div>
                      <div className="flex items-center space-x-2">
                        {getAlertBadge(alert.severity)}
                        <span className="text-xs text-muted-foreground">
                          {alert.timestamp}
                        </span>
                      </div>
                      <p className="mt-1">{alert.message}</p>
                    </div>
                  </div>
                  {!alert.acknowledged && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground"
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}