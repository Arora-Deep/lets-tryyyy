"use client";

import { Cloud } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { label: "Virtual Private Servers", href: "/services/vps" },
      { label: "Desktop as a Service", href: "/services/daas" },
      { label: "Cloud Storage", href: "/services/storage" },
      { label: "Application Publishing", href: "/services/publishing" }
    ],
    company: [
      { label: "About Us", href: "/company/about" },
      { label: "Blog", href: "/blog" },
      { label: "Status", href: "/company/status" },
      { label: "Contact", href: "/contact" }
    ],
    support: [
      { label: "Documentation", href: "/docs" },
      { label: "Security", href: "/company/security" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Support Center", href: "/support" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" }
    ]
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">DeepCloud</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Enterprise-grade cloud solutions for modern businesses. Experience the next evolution of cloud computing with unmatched performance and security.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Email: info@deepcloud.in</div>
              <div>Location: Bangalore, India</div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {links.products.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {links.support.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DeepCloud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {links.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}