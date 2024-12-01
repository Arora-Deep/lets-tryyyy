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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Copy, Key, Plus, Trash } from "lucide-react";

const apiKeys = [
  {
    name: "Production API Key",
    key: "sk_live_...",
    created: "2024-03-15",
    lastUsed: "2 hours ago",
    status: "active",
  },
  {
    name: "Development API Key",
    key: "sk_test_...",
    created: "2024-03-10",
    lastUsed: "1 day ago",
    status: "active",
  },
  {
    name: "Staging API Key",
    key: "sk_stage_...",
    created: "2024-03-01",
    lastUsed: "5 days ago",
    status: "revoked",
  },
];

export function APISettings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>API Settings</CardTitle>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Generate New Key
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>API Endpoint</Label>
              <div className="flex items-center space-x-2">
                <Input
                  value="https://api.deepcloud.com/v1"
                  readOnly
                />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center">
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((key) => (
                  <TableRow key={key.name}>
                    <TableCell>{key.name}</TableCell>
                    <TableCell>{key.created}</TableCell>
                    <TableCell>{key.lastUsed}</TableCell>
                    <TableCell>
                      <Badge
                        variant={key.status === "active" ? "default" : "secondary"}
                      >
                        {key.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-medium">Rate Limiting</h3>
            <p className="text-sm text-muted-foreground">
              Your current API rate limit is 1000 requests per minute. Contact
              support to increase this limit.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}