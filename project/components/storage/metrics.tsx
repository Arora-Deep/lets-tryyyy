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
  { time: "00:00", iops: 12000, throughput: 450, latency: 2 },
  { time: "04:00", iops: 8000, throughput: 350, latency: 1.5 },
  { time: "08:00", iops: 15000, throughput: 550, latency: 3 },
  { time: "12:00", iops: 18000, throughput: 650, latency: 4 },
  { time: "16:00", iops: 16000, throughput: 600, latency: 3.5 },
  { time: "20:00", iops: 11000, throughput: 400, latency: 2 },
  { time: "24:00", iops: 9000, throughput: 300, latency: 1.5 },
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

export function StorageMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage Performance</CardTitle>
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
                dataKey="iops"
                stroke="hsl(var(--primary))"
                name="IOPS"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="throughput"
                stroke="hsl(var(--secondary))"
                name="Throughput (MB/s)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="latency"
                stroke="hsl(var(--accent))"
                name="Latency (ms)"
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