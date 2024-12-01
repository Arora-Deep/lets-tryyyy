"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export function StorageScaling() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auto Scaling</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Enable Auto Scaling</Label>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Storage Utilization Threshold</Label>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Slider defaultValue={[85]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>IOPS Threshold</Label>
              <span className="text-sm text-muted-foreground">10K IOPS</span>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Volume Size Limits</Label>
              <span className="text-sm text-muted-foreground">100GB - 5TB</span>
            </div>
            <Slider defaultValue={[100, 5000]} min={100} max={5000} step={100} />
          </div>
        </div>

        <Button className="w-full">Save Scaling Configuration</Button>
      </CardContent>
    </Card>
  );
}