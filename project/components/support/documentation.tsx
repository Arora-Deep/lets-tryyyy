"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Book,
  FileText,
  Video,
  Code,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: <Book className="h-5 w-5" />,
    title: "Getting Started",
    description: "Quick start guides and tutorials",
    articles: [
      "Platform Overview",
      "First Steps Guide",
      "Basic Configuration",
    ],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "User Guides",
    description: "Detailed feature documentation",
    articles: [
      "VM Management",
      "Network Setup",
      "Security Best Practices",
    ],
  },
  {
    icon: <Video className="h-5 w-5" />,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    articles: [
      "Infrastructure Setup",
      "Scaling Resources",
      "Monitoring Overview",
    ],
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "API Reference",
    description: "API documentation and examples",
    articles: [
      "Authentication",
      "Endpoints Reference",
      "Code Samples",
    ],
  },
];

export function Documentation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documentation</CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {category.articles.map((article) => (
                  <Button
                    key={article}
                    variant="ghost"
                    className="w-full justify-between"
                  >
                    <span>{article}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}