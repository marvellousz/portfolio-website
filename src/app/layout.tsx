import "./global.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Space_Grotesk } from "next/font/google";
import { siteMetadata } from "@/data/siteMetadata";
import Head from "./head";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={cn(
          "min-h-screen antialiased bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",
          space_grotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/50 dark:from-amber-950/20 dark:via-transparent dark:to-orange-950/20 pointer-events-none" />
          
          <div className="relative min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="animate-fade-in">
                {children}
              </div>
            </main>
            
            <Footer />
          </div>            <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
