"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const legalPages = [
  { title: 'Privacy Policy', href: '/legal/privacy' },
  { title: 'Terms of Service', href: '/legal/terms' },
  { title: 'Cookie Policy', href: '/legal/cookies' },
  { title: 'Acceptable Use', href: '/legal/acceptable-use' }
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {legalPages.map((page) => (
            <Button
              key={page.href}
              variant="outline"
              className="whitespace-nowrap"
              asChild
            >
              <Link href={page.href}>{page.title}</Link>
            </Button>
          ))}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-primary/10">
            <CardContent className="p-8 md:p-12">
              {children}
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="mt-8 text-center p-8 rounded-lg bg-muted/50">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-2">
              If you have any questions about our legal policies, please contact us:
            </p>
            <div className="text-sm text-muted-foreground">
              <div>Email: info@deepcloud.in</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}