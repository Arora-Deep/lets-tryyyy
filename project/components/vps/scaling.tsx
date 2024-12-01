"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export function VPSScaling() {
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
              <Label>CPU Threshold</Label>
              <span className="text-sm text-muted-foreground">80%</span>
            </div>
            <Slider defaultValue={[80]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Memory Threshold</Label>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Instance Limits</Label>
              <span className="text-sm text-muted-foreground">1-5 instances</span>
            </div>
            <Slider defaultValue={[1, 5]} max={10} step={1} />
          </div>
        </div>

        <Button className="w-full">Save Scaling Configuration</Button>
      </CardContent>
    </Card>
  );
}