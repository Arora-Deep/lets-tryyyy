"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function BillingStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Usage</p>
              <p className="text-2xl font-bold">$1,234.56</p>
            </div>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Invoice
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Compute</span>
              <span>$789.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Storage</span>
              <span>$234.56</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Network</span>
              <span>$211.00</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between">
              <span className="font-medium">Projected Total</span>
              <span className="font-bold">$1,500.00</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on current usage patterns
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}