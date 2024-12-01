import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>DeepCloud - Enterprise Cloud Solutions</title>
        <meta name="description" content="Enterprise-grade cloud solutions including VPS, DaaS, Storage, and Application Publishing services." />
        <meta name="keywords" content="cloud computing, VPS, DaaS, cloud storage, application publishing, enterprise cloud" />
        <meta property="og:title" content="DeepCloud - Enterprise Cloud Solutions" />
        <meta property="og:description" content="Enterprise-grade cloud solutions including VPS, DaaS, Storage, and Application Publishing services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeepCloud - Enterprise Cloud Solutions" />
        <meta name="twitter:description" content="Enterprise-grade cloud solutions including VPS, DaaS, Storage, and Application Publishing services." />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}