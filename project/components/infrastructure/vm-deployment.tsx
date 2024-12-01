"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, HardDrive, Cpu, Memory } from "lucide-react";

export function VMDeployment() {
  const [config, setConfig] = useState({
    name: "",
    template: "ubuntu-22.04",
    cpu: 2,
    memory: 4,
    storage: 50,
    backups: true,
    highAvailability: false,
  });

  const templates = [
    { id: "ubuntu-22.04", name: "Ubuntu 22.04 LTS" },
    { id: "debian-11", name: "Debian 11" },
    { id: "centos-8", name: "CentOS 8" },
    { id: "windows-2022", name: "Windows Server 2022" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deploy Virtual Machine</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Config</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="vm-name">VM Name</Label>
                <Input
                  id="vm-name"
                  placeholder="Enter VM name"
                  value={config.name}
                  onChange={(e) =>
                    setConfig({ ...config, name: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label>Template</Label>
                <Select
                  value={config.template}
                  onValueChange={(value) =>
                    setConfig({ ...config, template: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center">
                    <Cpu className="h-4 w-4 mr-2" />
                    CPU Cores
                  </Label>
                  <span className="text-sm">{config.cpu} vCPU</span>
                </div>
                <Slider
                  value={[config.cpu]}
                  min={1}
                  max={16}
                  step={1}
                  onValueChange={([value]) =>
                    setConfig({ ...config, cpu: value })
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center">
                    <Memory className="h-4 w-4 mr-2" />
                    Memory
                  </Label>
                  <span className="text-sm">{config.memory} GB</span>
                </div>
                <Slider
                  value={[config.memory]}
                  min={1}
                  max={64}
                  step={1}
                  onValueChange={([value]) =>
                    setConfig({ ...config, memory: value })
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center">
                    <HardDrive className="h-4 w-4 mr-2" />
                    Storage
                  </Label>
                  <span className="text-sm">{config.storage} GB</span>
                </div>
                <Slider
                  value={[config.storage]}
                  min={10}
                  max={1000}
                  step={10}
                  onValueChange={([value]) =>
                    setConfig({ ...config, storage: value })
                  }
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automated Backups</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable daily backups of this VM
                  </p>
                </div>
                <Switch
                  checked={config.backups}
                  onCheckedChange={(checked) =>
                    setConfig({ ...config, backups: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>High Availability</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically migrate VM on host failure
                  </p>
                </div>
                <Switch
                  checked={config.highAvailability}
                  onCheckedChange={(checked) =>
                    setConfig({ ...config, highAvailability: checked })
                  }
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>
          <Server className="h-4 w-4 mr-2" />
          Deploy VM
        </Button>
      </CardFooter>
    </Card>
  );
}