"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Power, RefreshCw, Shield, Terminal, Upload } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      icon: <Plus className="h-4 w-4" />,
      label: "New Instance",
      description: "Deploy a new VM",
    },
    {
      icon: <Power className="h-4 w-4" />,
      label: "Power Options",
      description: "Manage VM power state",
    },
    {
      icon: <RefreshCw className="h-4 w-4" />,
      label: "Backup Now",
      description: "Create instant backup",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      label: "Security",
      description: "Update security rules",
    },
    {
      icon: <Terminal className="h-4 w-4" />,
      label: "Console",
      description: "Open VM console",
    },
    {
      icon: <Upload className="h-4 w-4" />,
      label: "Scale",
      description: "Adjust resources",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto flex-col items-center justify-center space-y-2 p-4"
            >
              {action.icon}
              <div className="text-xs font-medium">{action.label}</div>
              <div className="text-xs text-muted-foreground">
                {action.description}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}