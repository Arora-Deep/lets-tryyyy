"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  AlertCircle 
} from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      type: "success",
      message: "VM instance deployed successfully",
      time: "2 minutes ago",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
    {
      type: "warning",
      message: "High CPU usage detected",
      time: "15 minutes ago",
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    },
    {
      type: "error",
      message: "Failed to create backup",
      time: "1 hour ago",
      icon: <XCircle className="h-4 w-4 text-red-500" />,
    },
    {
      type: "info",
      message: "System update scheduled",
      time: "2 hours ago",
      icon: <AlertCircle className="h-4 w-4 text-blue-500" />,
    },
  ];

  const getStatusBadge = (type: string) => {
    switch (type) {
      case "success":
        return <Badge variant="default">Success</Badge>;
      case "warning":
        return <Badge variant="secondary">Warning</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
      case "info":
        return <Badge variant="outline">Info</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50"
              >
                {activity.icon}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p>{activity.message}</p>
                    {getStatusBadge(activity.type)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}