"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Network, Shield } from "lucide-react";

export function NetworkSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Network Type</Label>
            <Select defaultValue="bridge">
              <SelectTrigger>
                <SelectValue placeholder="Select network type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bridge">Bridge Network</SelectItem>
                <SelectItem value="nat">NAT Network</SelectItem>
                <SelectItem value="isolated">Isolated Network</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>VLAN ID</Label>
            <Input type="number" placeholder="Enter VLAN ID" />
          </div>

          <div className="space-y-2">
            <Label>Firewall Settings</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Enable Firewall</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Network className="h-4 w-4" />
                  <span>Allow SSH Access</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full">
          Save Network Settings
        </Button>
      </CardContent>
    </Card>
  );
}