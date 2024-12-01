"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Cloud,
  Server,
  Database,
  Monitor,
  Settings,
  HelpCircle,
  BarChart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const mainMenu = [
  {
    title: "Overview",
    icon: <BarChart className="h-5 w-5" />,
    href: "/dashboard",
  },
  {
    title: "VPS",
    icon: <Server className="h-5 w-5" />,
    href: "/dashboard/vps",
  },
  {
    title: "DaaS",
    icon: <Monitor className="h-5 w-5" />,
    href: "/dashboard/daas",
  },
  {
    title: "Storage",
    icon: <Database className="h-5 w-5" />,
    href: "/dashboard/storage",
  },
  {
    title: "Security",
    icon: <Shield className="h-5 w-5" />,
    href: "/dashboard/security",
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/dashboard/settings",
  },
  {
    title: "Support",
    icon: <HelpCircle className="h-5 w-5" />,
    href: "/dashboard/support",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed inset-y-0 z-50 w-64 bg-background border-r">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Cloud className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">DeepCloud</span>
          </Link>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-4">
          <nav className="space-y-2">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>

        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-muted" />
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">
                john@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}