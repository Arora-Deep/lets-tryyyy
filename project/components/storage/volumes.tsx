"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HardDrive, MoreVertical } from "lucide-react";
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

const volumes = [
  {
    id: "vol-1",
    name: "data-volume-01",
    type: "SSD",
    size: "500 GB",
    used: "320 GB",
    status: "healthy",
  },
  {
    id: "vol-2",
    name: "backup-volume-01",
    type: "HDD",
    size: "2 TB",
    used: "1.2 TB",
    status: "healthy",
  },
  {
    id: "vol-3",
    name: "archive-volume-01",
    type: "Cold Storage",
    size: "5 TB",
    used: "4.5 TB",
    status: "syncing",
  },
];

export function StorageVolumes() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Storage Volumes</CardTitle>
        <Button>
          <HardDrive className="h-4 w-4 mr-2" />
          New Volume
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Used</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {volumes.map((volume) => (
              <TableRow key={volume.id}>
                <TableCell className="font-medium">{volume.name}</TableCell>
                <TableCell>{volume.type}</TableCell>
                <TableCell>{volume.size}</TableCell>
                <TableCell>{volume.used}</TableCell>
                <TableCell>
                  <Badge
                    variant={volume.status === "healthy" ? "default" : "secondary"}
                  >
                    {volume.status}
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
                      <DropdownMenuItem>Expand</DropdownMenuItem>
                      <DropdownMenuItem>Snapshot</DropdownMenuItem>
                      <DropdownMenuItem>Mount</DropdownMenuItem>
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