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

const generateData = (points: number) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    data.push({
      time: `${i}:00`,
      cpu: Math.floor(Math.random() * 30) + 40,
      memory: Math.floor(Math.random() * 20) + 60,
      network: Math.floor(Math.random() * 40) + 30,
      disk: Math.floor(Math.random() * 25) + 45,
    });
  }
  return data;
};

const data = generateData(24);

export function MetricsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="realtime">
          <TabsList>
            <TabsTrigger value="realtime">Real-time</TabsTrigger>
            <TabsTrigger value="hourly">Hourly</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>

          <TabsContent value="realtime" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="cpu"
                    stroke="hsl(var(--primary))"
                    name="CPU Usage (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="memory"
                    stroke="hsl(var(--secondary))"
                    name="Memory Usage (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="network"
                    stroke="hsl(var(--accent))"
                    name="Network (Mbps)"
                  />
                  <Line
                    type="monotone"
                    dataKey="disk"
                    stroke="hsl(var(--destructive))"
                    name="Disk I/O (MB/s)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "CPU Usage", value: "65%", change: "+5%" },
                { label: "Memory Usage", value: "78%", change: "-2%" },
                { label: "Network Traffic", value: "45 Mbps", change: "+12%" },
                { label: "Disk I/O", value: "120 MB/s", change: "+8%" },
              ].map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="p-4">
                    <div className="text-sm font-medium">{metric.label}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {metric.change} from last hour
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Add similar content for other tabs */}
        </Tabs>
      </CardContent>
    </Card>
  );
}