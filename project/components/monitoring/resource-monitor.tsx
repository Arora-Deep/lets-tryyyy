"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Network, Memory } from "lucide-react";

const resources = [
  {
    name: "web-server-01",
    type: "VM",
    metrics: {
      cpu: 75,
      memory: 85,
      disk: 45,
      network: 60,
    },
    status: "healthy",
  },
  {
    name: "db-server-01",
    type: "VM",
    metrics: {
      cpu: 90,
      memory: 70,
      disk: 80,
      network: 40,
    },
    status: "warning",
  },
  {
    name: "cache-01",
    type: "VM",
    metrics: {
      cpu: 30,
      memory: 45,
      disk: 20,
      network: 25,
    },
    status: "healthy",
  },
  // Add more resources...
];

export function ResourceMonitor() {
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

  const getMetricColor = (value: number) => {
    if (value >= 90) return "bg-red-500";
    if (value >= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-6">
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="p-4 rounded-lg border space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{resource.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Type: {resource.type}
                    </p>
                  </div>
                  {getStatusBadge(resource.status)}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>CPU Usage</span>
                        <span>{resource.metrics.cpu}%</span>
                      </div>
                      <Progress
                        value={resource.metrics.cpu}
                        className={getMetricColor(resource.metrics.cpu)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Memory className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Memory Usage</span>
                        <span>{resource.metrics.memory}%</span>
                      </div>
                      <Progress
                        value={resource.metrics.memory}
                        className={getMetricColor(resource.metrics.memory)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Disk Usage</span>
                        <span>{resource.metrics.disk}%</span>
                      </div>
                      <Progress
                        value={resource.metrics.disk}
                        className={getMetricColor(resource.metrics.disk)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Network className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network Usage</span>
                        <span>{resource.metrics.network}%</span>
                      </div>
                      <Progress
                        value={resource.metrics.network}
                        className={getMetricColor(resource.metrics.network)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}