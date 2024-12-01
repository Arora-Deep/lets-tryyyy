"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, MoreVertical } from "lucide-react";
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

const desktops = [
  {
    id: "vd-1",
    name: "Finance-Desktop-01",
    user: "John Doe",
    status: "active",
    os: "Windows 11 Pro",
    resources: "4 vCPU, 16GB RAM",
  },
  {
    id: "vd-2",
    name: "Sales-Desktop-01",
    user: "Jane Smith",
    status: "active",
    os: "Windows 11 Pro",
    resources: "4 vCPU, 16GB RAM",
  },
  {
    id: "vd-3",
    name: "Dev-Desktop-01",
    user: "Mike Johnson",
    status: "inactive",
    os: "Ubuntu 22.04",
    resources: "8 vCPU, 32GB RAM",
  },
];

export function DaaSDesktops() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Virtual Desktops</CardTitle>
        <Button>
          <Monitor className="h-4 w-4 mr-2" />
          New Desktop
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>User</TableHead>
              <TableHead>OS</TableHead>
              <TableHead>Resources</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {desktops.map((desktop) => (
              <TableRow key={desktop.id}>
                <TableCell className="font-medium">{desktop.name}</TableCell>
                <TableCell>{desktop.user}</TableCell>
                <TableCell>{desktop.os}</TableCell>
                <TableCell>{desktop.resources}</TableCell>
                <TableCell>
                  <Badge
                    variant={desktop.status === "active" ? "default" : "secondary"}
                  >
                    {desktop.status}
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
                      <DropdownMenuItem>Connect</DropdownMenuItem>
                      <DropdownMenuItem>Restart</DropdownMenuItem>
                      <DropdownMenuItem>Reassign User</DropdownMenuItem>
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