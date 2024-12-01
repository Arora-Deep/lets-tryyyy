"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cloud, Server, Monitor, Database, Layout, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      href: '/services/vps',
      label: 'Virtual Private Servers',
      description: 'High-performance VPS with automated scaling',
      icon: <Server className="h-4 w-4" />,
      gradient: "from-[#40E0D0] to-[#7B68EE]"
    },
    {
      href: '/services/daas',
      label: 'Desktop as a Service',
      description: 'Secure remote workspaces accessible from anywhere',
      icon: <Monitor className="h-4 w-4" />,
      gradient: "from-[#7B68EE] to-[#FF69B4]"
    },
    {
      href: '/services/storage',
      label: 'Cloud Storage',
      description: 'Enterprise-grade storage solutions',
      icon: <Database className="h-4 w-4" />,
      gradient: "from-[#FF69B4] to-[#40E0D0]"
    },
    {
      href: '/services/publishing',
      label: 'Application Publishing',
      description: 'Role-based application access control',
      icon: <Layout className="h-4 w-4" />,
      gradient: "from-[#40E0D0] to-[#7B68EE]"
    }
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md border-b border-border/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Cloud className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">DeepCloud</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-colors"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {service.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-accent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium px-4">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                      {service.icon}
                    </div>
                    <div className="font-medium">{service.label}</div>
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <Link
                  href="/pricing"
                  className="block px-4 py-2 hover:bg-muted rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-muted rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}