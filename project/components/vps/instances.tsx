"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const instances = [
  {
    id: "i-1",
    name: "web-server-01",
    status: "running",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "80 GB",
    ip: "10.0.0.1",
  },
  {
    id: "i-2",
    name: "db-server-01",
    status: "running",
    cpu: "4 vCPU",
    memory: "8 GB",
    storage: "160 GB",
    ip: "10.0.0.2",
  },
  {
    id: "i-3",
    name: "cache-01",
    status: "stopped",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "40 GB",
    ip: "10.0.0.3",
  },
];

export function VPSInstances() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>VPS Instances</CardTitle>
        <Button>
          <Server className="h-4 w-4 mr-2" />
          New Instance
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Resources</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instances.map((instance) => (
              <TableRow key={instance.id}>
                <TableCell className="font-medium">{instance.name}</TableCell>
                <TableCell>
                  {instance.cpu}, {instance.memory}, {instance.storage}
                </TableCell>
                <TableCell>{instance.ip}</TableCell>
                <TableCell>
                  <Badge
                    variant={instance.status === "running" ? "default" : "secondary"}
                  >
                    {instance.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Start/Stop</DropdownMenuItem>
                      <DropdownMenuItem>Restart</DropdownMenuItem>
                      <DropdownMenuItem>Console</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}