"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Server, Cpu, Memory, Network } from "lucide-react";

const metrics = [
  {
    title: "Active VMs",
    value: "12",
    change: "+2",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Total vCPUs",
    value: "48",
    change: "+8",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Total RAM",
    value: "128GB",
    change: "+16GB",
    icon: <Memory className="h-5 w-5" />,
  },
  {
    title: "Network Usage",
    value: "1.8TB",
    change: "+200GB",
    icon: <Network className="h-5 w-5" />,
  },
];

export function ResourceOverview() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <h3 className="text-sm font-medium">{metric.title}</h3>
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                {metric.icon}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change} from last month
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}