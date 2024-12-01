"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Upload,
  Download,
  RefreshCw,
  Shield,
  Settings,
} from "lucide-react";

export function DeploymentActions() {
  const actions = [
    {
      icon: <Plus className="h-4 w-4" />,
      label: "Deploy VM",
      description: "Create new instance",
    },
    {
      icon: <Upload className="h-4 w-4" />,
      label: "Import",
      description: "Import existing VM",
    },
    {
      icon: <Download className="h-4 w-4" />,
      label: "Backup",
      description: "Create backup",
    },
    {
      icon: <RefreshCw className="h-4 w-4" />,
      label: "Migration",
      description: "Live migration",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      label: "Security",
      description: "Update rules",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      label: "Settings",
      description: "Configure",
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