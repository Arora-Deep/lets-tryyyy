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

const data = [
  { time: "00:00", activeUsers: 120, cpuUsage: 45, memoryUsage: 60 },
  { time: "04:00", activeUsers: 85, cpuUsage: 35, memoryUsage: 50 },
  { time: "08:00", activeUsers: 150, cpuUsage: 65, memoryUsage: 75 },
  { time: "12:00", activeUsers: 180, cpuUsage: 80, memoryUsage: 85 },
  { time: "16:00", activeUsers: 160, cpuUsage: 70, memoryUsage: 80 },
  { time: "20:00", activeUsers: 110, cpuUsage: 50, memoryUsage: 65 },
  { time: "24:00", activeUsers: 90, cpuUsage: 40, memoryUsage: 55 },
];

const CustomXAxis = ({ tick = true, tickLine = true, axisLine = true, ...props }) => (
  <XAxis 
    tick={tick}
    tickLine={tickLine}
    axisLine={axisLine}
    padding={{ left: 0, right: 0 }}
    tick={{ fontSize: 12 }}
    tickLine={{ stroke: 'currentColor' }}
    axisLine={{ stroke: 'currentColor' }}
    {...props}
  />
);

const CustomYAxis = ({ tick = true, tickLine = true, axisLine = true, ...props }) => (
  <YAxis
    tick={tick}
    tickLine={tickLine}
    axisLine={axisLine}
    padding={{ top: 20, bottom: 20 }}
    tick={{ fontSize: 12 }}
    tickLine={{ stroke: 'currentColor' }}
    axisLine={{ stroke: 'currentColor' }}
    {...props}
  />
);

export function DaaSMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <CustomXAxis dataKey="time" />
              <CustomYAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="hsl(var(--primary))"
                name="Active Users"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="cpuUsage"
                stroke="hsl(var(--secondary))"
                name="CPU Usage (%)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="memoryUsage"
                stroke="hsl(var(--accent))"
                name="Memory Usage (%)"
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