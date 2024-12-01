"use client";

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
import { Network, Shield, Globe, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const networks = [
  {
    id: "net-1",
    name: "Production",
    type: "VLAN",
    subnet: "10.0.0.0/24",
    security: "High",
    status: "active",
  },
  {
    id: "net-2",
    name: "Development",
    type: "VLAN",
    subnet: "10.0.1.0/24",
    security: "Medium",
    status: "active",
  },
  {
    id: "net-3",
    name: "Testing",
    type: "VLAN",
    subnet: "10.0.2.0/24",
    security: "Low",
    status: "inactive",
  },
];

export function NetworkConfig() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Network Configuration</CardTitle>
        <Button>
          <Network className="h-4 w-4 mr-2" />
          Add Network
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Subnet</TableHead>
              <TableHead>Security Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {networks.map((network) => (
              <TableRow key={network.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    {network.name}
                  </div>
                </TableCell>
                <TableCell>{network.type}</TableCell>
                <TableCell>{network.subnet}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    {network.security}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={network.status === "active" ? "default" : "secondary"}
                  >
                    {network.status}
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
                      <DropdownMenuItem>Edit Network</DropdownMenuItem>
                      <DropdownMenuItem>Configure DHCP</DropdownMenuItem>
                      <DropdownMenuItem>Security Rules</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete Network
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