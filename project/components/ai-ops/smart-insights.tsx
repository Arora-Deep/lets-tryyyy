"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const performanceData = [
  { time: "00:00", cpu: 45, memory: 60, cost: 100 },
  { time: "04:00", cpu: 55, memory: 65, cost: 120 },
  { time: "08:00", cpu: 75, memory: 75, cost: 150 },
  { time: "12:00", cpu: 85, memory: 80, cost: 180 },
  { time: "16:00", cpu: 70, memory: 70, cost: 140 },
  { time: "20:00", cpu: 60, memory: 65, cost: 130 },
  { time: "24:00", cpu: 50, memory: 60, cost: 110 },
];

const insights = [
  {
    type: "optimization",
    message: "Potential cost savings of 15% by optimizing VM sizes",
    impact: "high",
    icon: <TrendingDown className="h-4 w-4 text-green-500" />,
  },
  {
    type: "performance",
    message: "CPU utilization peaks detected during business hours",
    impact: "medium",
    icon: <TrendingUp className="h-4 w-4 text-yellow-500" />,
  },
  {
    type: "anomaly",
    message: "Unusual network traffic pattern detected",
    impact: "low",
    icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
  },
];

export function SmartInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SmartInsights™</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="cpu"
                    stroke="hsl(var(--primary))"
                    name="CPU Usage"
                  />
                  <Line
                    type="monotone"
                    dataKey="memory"
                    stroke="hsl(var(--secondary))"
                    name="Memory Usage"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="cost" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    stroke="hsl(var(--primary))"
                    name="Cost ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50"
              >
                <div className="shrink-0">{insight.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium capitalize">{insight.type}</span>
                    <Badge
                      variant={
                        insight.impact === "high"
                          ? "destructive"
                          : insight.impact === "medium"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {insight.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insight.message}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}