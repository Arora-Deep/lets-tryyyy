"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SystemHealth() {
  const healthMetrics = [
    { name: "System Uptime", value: 99.99, target: 100 },
    { name: "Response Time", value: 85, target: 100 },
    { name: "Error Rate", value: 0.01, target: 1 },
    { name: "Resource Health", value: 95, target: 100 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {healthMetrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{metric.name}</span>
                <span className="text-muted-foreground">
                  {metric.value}%
                </span>
              </div>
              <Progress value={(metric.value / metric.target) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}