"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Cpu, Memory, HardDrive, Settings } from "lucide-react";
import { useState } from "react";

export function AutoScale() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [threshold, setThreshold] = useState([80]);

  const resources = [
    {
      icon: <Cpu className="h-4 w-4" />,
      name: "CPU Scaling",
      current: "2 vCPU",
      max: "8 vCPU",
      isActive: true,
    },
    {
      icon: <Memory className="h-4 w-4" />,
      name: "Memory Scaling",
      current: "4 GB",
      max: "16 GB",
      isActive: true,
    },
    {
      icon: <HardDrive className="h-4 w-4" />,
      name: "Storage Scaling",
      current: "100 GB",
      max: "500 GB",
      isActive: false,
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AutoScale™</CardTitle>
        <div className="flex items-center space-x-2">
          <Switch
            checked={isEnabled}
            onCheckedChange={setIsEnabled}
          />
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Scale Threshold</span>
              <span className="text-muted-foreground">{threshold}%</span>
            </div>
            <Slider
              value={threshold}
              onValueChange={setThreshold}
              min={50}
              max={95}
              step={5}
              disabled={!isEnabled}
            />
          </div>

          <div className="space-y-4">
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {resource.icon}
                  </div>
                  <div>
                    <div className="font-medium">{resource.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {resource.current} / {resource.max}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={resource.isActive && isEnabled}
                  disabled={!isEnabled}
                />
              </div>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-primary/10 text-sm">
            <p className="text-primary font-medium">AutoScale™ Status</p>
            <p className="text-muted-foreground mt-1">
              {isEnabled
                ? "Actively monitoring and adjusting resources based on demand"
                : "Resource scaling is currently disabled"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}