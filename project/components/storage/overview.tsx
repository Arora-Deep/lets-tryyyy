"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HardDrive, Upload, Download, Gauge } from "lucide-react";

const metrics = [
  {
    title: "Total Storage",
    value: "24.6TB",
    change: "+2.1TB",
    icon: <HardDrive className="h-5 w-5" />,
  },
  {
    title: "Upload Rate",
    value: "256MB/s",
    change: "+12MB/s",
    icon: <Upload className="h-5 w-5" />,
  },
  {
    title: "Download Rate",
    value: "512MB/s",
    change: "+24MB/s",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "IOPS",
    value: "15.2K",
    change: "+1.1K",
    icon: <Gauge className="h-5 w-5" />,
  },
];

export function StorageOverview() {
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