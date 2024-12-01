"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ResourceMetrics() {
  const data = [
    { time: "00:00", cpu: 45, memory: 60, network: 30 },
    { time: "04:00", cpu: 55, memory: 65, network: 35 },
    { time: "08:00", cpu: 75, memory: 75, network: 45 },
    { time: "12:00", cpu: 85, memory: 80, network: 55 },
    { time: "16:00", cpu: 70, memory: 70, network: 40 },
    { time: "20:00", cpu: 60, memory: 65, network: 35 },
    { time: "24:00", cpu: 50, memory: 60, network: 30 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time"
                padding={{ left: 0, right: 0 }}
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
              />
              <YAxis
                padding={{ top: 20, bottom: 20 }}
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cpu"
                stroke="hsl(var(--primary))"
                name="CPU Usage (%)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="memory"
                stroke="hsl(var(--secondary))"
                name="Memory Usage (%)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="network"
                stroke="hsl(var(--accent))"
                name="Network (Mbps)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}