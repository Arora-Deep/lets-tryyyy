"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Power, MoreVertical, HardDrive, Cpu, Network } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const vms = [
  {
    id: "vm-1",
    name: "web-server-01",
    status: "running",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "80 GB",
    ip: "10.0.0.1",
  },
  {
    id: "vm-2",
    name: "db-server-01",
    status: "running",
    cpu: "4 vCPU",
    memory: "8 GB",
    storage: "160 GB",
    ip: "10.0.0.2",
  },
  {
    id: "vm-3",
    name: "cache-01",
    status: "stopped",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "40 GB",
    ip: "10.0.0.3",
  },
];

export function VMList() {
  const [selectedVMs, setSelectedVMs] = useState<string[]>([]);

  const toggleVM = (id: string) => {
    setSelectedVMs((prev) =>
      prev.includes(id)
        ? prev.filter((vmId) => vmId !== id)
        : [...prev, id]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Virtual Machines</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Resources</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vms.map((vm) => (
              <TableRow key={vm.id}>
                <TableCell>{vm.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={vm.status === "running" ? "default" : "secondary"}
                  >
                    {vm.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 mr-1" />
                      {vm.cpu}
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 mr-1" />
                      {vm.memory}
                    </div>
                    <div className="flex items-center">
                      <Network className="h-4 w-4 mr-1" />
                      {vm.storage}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{vm.ip}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleVM(vm.id)}
                    >
                      <Power className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Console</DropdownMenuItem>
                        <DropdownMenuItem>Edit Configuration</DropdownMenuItem>
                        <DropdownMenuItem>Create Backup</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete VM
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}