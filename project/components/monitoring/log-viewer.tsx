"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Download, RefreshCw } from "lucide-react";

const logs = [
  {
    timestamp: "2024-03-20 14:30:25",
    level: "info",
    service: "api",
    message: "Request processed successfully",
  },
  {
    timestamp: "2024-03-20 14:30:20",
    level: "warning",
    service: "auth",
    message: "Failed login attempt detected",
  },
  {
    timestamp: "2024-03-20 14:30:15",
    level: "error",
    service: "database",
    message: "Connection timeout error",
  },
  {
    timestamp: "2024-03-20 14:30:10",
    level: "info",
    service: "compute",
    message: "VM instance started successfully",
  },
  // Add more log entries...
];

export function LogViewer() {
  const [filter, setFilter] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  const filteredLogs = logs.filter((log) => {
    const matchesFilter = log.message
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesLevel =
      selectedLevel === "all" || log.level === selectedLevel;
    const matchesService =
      selectedService === "all" || log.service === selectedService;
    return matchesFilter && matchesLevel && matchesService;
  });

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "error":
        return <Badge variant="destructive">Error</Badge>;
      case "warning":
        return <Badge variant="secondary">Warning</Badge>;
      case "info":
        return <Badge variant="default">Info</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>System Logs</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <Select
              value={selectedLevel}
              onValueChange={setSelectedLevel}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedService}
              onValueChange={setSelectedService}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="api">API</SelectItem>
                <SelectItem value="auth">Auth</SelectItem>
                <SelectItem value="database">Database</SelectItem>
                <SelectItem value="compute">Compute</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ScrollArea className="h-[400px] rounded-md border">
            <div className="space-y-2 p-4">
              {filteredLogs.map((log, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50"
                >
                  <div className="w-36 text-xs text-muted-foreground">
                    {log.timestamp}
                  </div>
                  <div className="w-20">{getLevelBadge(log.level)}</div>
                  <div className="w-24 text-sm font-medium">
                    {log.service}
                  </div>
                  <div className="flex-1 text-sm">{log.message}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}