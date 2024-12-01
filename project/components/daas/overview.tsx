"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Monitor, Cpu, Clock } from "lucide-react";

const metrics = [
  {
    title: "Active Users",
    value: "156",
    change: "+12",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Active Desktops",
    value: "142",
    change: "+8",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    title: "Resource Usage",
    value: "78%",
    change: "+5%",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Avg. Session",
    value: "6.2h",
    change: "+0.5h",
    icon: <Clock className="h-5 w-5" />,
  },
];

export function DaaSOverview() {
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