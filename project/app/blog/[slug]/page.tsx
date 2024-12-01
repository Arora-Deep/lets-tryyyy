"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Tags } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string }
}

const blogs = [
  {
    slug: "cloud-cost-optimization",
    title: "10 Best Practices for Cloud Cost Optimization",
    content: `
      <h1>10 Best Practices for Cloud Cost Optimization</h1>
      <p>Cloud costs can quickly spiral out of control without proper management and optimization. Here are 10 proven strategies to help you reduce your cloud infrastructure costs while maintaining performance.</p>
      
      <h2>1. Right-size Your Resources</h2>
      <p>One of the most effective ways to optimize cloud costs is to ensure you're using appropriately sized resources. Many organizations over-provision their resources, leading to unnecessary expenses.</p>
      
      <h3>Key Actions:</h3>
      <ul>
        <li>Monitor resource utilization</li>
        <li>Adjust instance sizes based on actual usage</li>
        <li>Remove or downsize unused resources</li>
      </ul>
      
      <h2>2. Use Auto-scaling Effectively</h2>
      <p>Implement auto-scaling to automatically adjust resources based on demand. This ensures you're only paying for what you need when you need it.</p>
      
      <h2>3. Leverage Reserved Instances</h2>
      <p>For predictable workloads, using reserved instances can provide significant cost savings compared to on-demand pricing.</p>
      
      <h2>4. Regular Cost Analysis</h2>
      <p>Conduct regular cost analysis to identify:</p>
      <ul>
        <li>Unused resources</li>
        <li>Optimization opportunities</li>
        <li>Cost trends</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    category: "Cost Optimization",
    author: "Cloud Team",
    date: "March 20, 2024",
    readTime: "10 min read",
    tags: ["cloud", "costs", "optimization"]
  },
  {
    slug: "cloud-security-guide",
    title: "Understanding Cloud Security: A Comprehensive Guide",
    content: `
      <h1>Understanding Cloud Security: A Comprehensive Guide</h1>
      <p>Cloud security is a critical concern for businesses of all sizes. This comprehensive guide covers everything you need to know about securing your cloud infrastructure.</p>
      
      <h2>The Importance of Cloud Security</h2>
      <p>As organizations increasingly move their operations to the cloud, security becomes paramount. Understanding and implementing proper security measures protects your data, applications, and infrastructure.</p>
      
      <h2>Key Security Components</h2>
      
      <h3>1. Identity and Access Management (IAM)</h3>
      <ul>
        <li>Role-based access control</li>
        <li>Multi-factor authentication</li>
        <li>Principle of least privilege</li>
      </ul>
      
      <h3>2. Data Security</h3>
      <ul>
        <li>Encryption at rest and in transit</li>
        <li>Key management</li>
        <li>Data classification</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    category: "Security",
    author: "Security Team",
    date: "March 18, 2024",
    readTime: "15 min read",
    tags: ["security", "compliance", "best-practices"]
  }
];

export default function BlogPost({ params }: Props) {
  const post = blogs.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-background/80 backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-6 border-t">
            <div className="flex items-center gap-2">
              <Tags className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-sm text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12">
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}