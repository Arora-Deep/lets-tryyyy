"use client";

import { motion } from 'framer-motion';
import { Monitor, Layout, Database, Server } from 'lucide-react';

interface HeroIllustrationProps {
  slug: string;
}

export function HeroIllustration({ slug }: HeroIllustrationProps) {
  switch (slug) {
    case 'vps':
      return <ServerIllustration />;
    case 'daas':
      return <DesktopIllustration />;
    case 'storage':
      return <StorageIllustration />;
    case 'publishing':
      return <ApplicationIllustration />;
    default:
      return <ServerIllustration />;
  }
}

function ServerIllustration() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0] via-[#7B68EE] to-[#FF69B4] rounded-xl opacity-20 blur-xl" />
          <div className="absolute inset-4 bg-background/90 backdrop-blur-sm rounded-lg border shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b">
              <Server className="h-6 w-6 text-primary" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="flex-1 h-2 bg-gradient-to-r from-primary/20 to-transparent rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DesktopIllustration() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0] via-[#7B68EE] to-[#FF69B4] rounded-xl opacity-20 blur-xl" />
          <div className="absolute inset-4 bg-background/90 backdrop-blur-sm rounded-lg border shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b">
              <Monitor className="h-6 w-6 text-primary" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StorageIllustration() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0] via-[#7B68EE] to-[#FF69B4] rounded-xl opacity-20 blur-xl" />
          <div className="absolute inset-4 bg-background/90 backdrop-blur-sm rounded-lg border shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b">
              <Database className="h-6 w-6 text-primary" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-16 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ApplicationIllustration() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0] via-[#7B68EE] to-[#FF69B4] rounded-xl opacity-20 blur-xl" />
          <div className="absolute inset-4 bg-background/90 backdrop-blur-sm rounded-lg border shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b">
              <Layout className="h-6 w-6 text-primary" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="h-8 w-1/3 bg-gradient-to-r from-primary/20 to-transparent rounded" />
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="h-20 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 bg-gradient-to-r from-primary/20 to-transparent rounded" style={{ width: `${80 - i * 20}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}