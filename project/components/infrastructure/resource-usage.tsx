"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ResourceUsage() {
  const resources = [
    {
      name: "CPU Allocation",
      used: 68,
      total: 100,
      unit: "cores",
    },
    {
      name: "Memory Usage",
      used: 45,
      total: 64,
      unit: "GB",
    },
    {
      name: "Storage",
      used: 2.1,
      total: 5,
      unit: "TB",
    },
    {
      name: "Network Bandwidth",
      used: 750,
      total: 1000,
      unit: "Mbps",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {resources.map((resource) => (
            <div key={resource.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{resource.name}</span>
                <span className="text-muted-foreground">
                  {resource.used} / {resource.total} {resource.unit}
                </span>
              </div>
              <Progress
                value={(resource.used / resource.total) * 100}
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}