"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HardDrive, Plus } from "lucide-react";

export function StorageConfig() {
  const storageTypes = [
    { id: "local", name: "Local Storage", used: 45, total: 100 },
    { id: "san", name: "SAN Storage", used: 120, total: 500 },
    { id: "nfs", name: "NFS Share", used: 80, total: 200 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Storage Configuration</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Storage
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {storageTypes.map((storage) => (
            <div key={storage.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HardDrive className="h-4 w-4" />
                  <span>{storage.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {storage.used}/{storage.total} GB
                </span>
              </div>
              <Progress
                value={(storage.used / storage.total) * 100}
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Select defaultValue="thin">
            <SelectTrigger>
              <SelectValue placeholder="Provisioning type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thin">Thin Provisioning</SelectItem>
              <SelectItem value="thick">Thick Provisioning</SelectItem>
              <SelectItem value="eager">Eager Zeroed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">
          Apply Storage Configuration
        </Button>
      </CardContent>
    </Card>
  );
}