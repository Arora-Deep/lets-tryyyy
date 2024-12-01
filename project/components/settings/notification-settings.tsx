"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Bell className="h-4 w-4 mr-2 text-primary" />
              <h3 className="font-medium">System Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Resource Usage Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when resource usage exceeds thresholds
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about security events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Maintenance Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about scheduled maintenance
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <h3 className="font-medium">Email Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Billing Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive invoices and billing notifications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Newsletter</Label>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with product news and updates
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center">
              <Smartphone className="h-4 w-4 mr-2 text-primary" />
              <h3 className="font-medium">Mobile Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your mobile device
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>SMS Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Get critical alerts via SMS
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              <h3 className="font-medium">Support Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Ticket Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about support ticket status changes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Chat Messages</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for new chat messages
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Notification Settings</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}