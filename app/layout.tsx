import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamylabs.com"),
  title: {
    default: "Jamy Labs | Custom Software Development Company",
    template: "%s | Jamy Labs"
  },
  description: "Jamy Labs helps startups and enterprises build scalable web, mobile, SaaS, AI, and enterprise software solutions. Get your free consultation today.",
  keywords: [
    "custom software development",
    "web development",
    "mobile app development",
    "SaaS development",
    "AI solutions",
    "enterprise software"
  ],
  authors: [{ name: "Jamy Labs" }],
  creator: "Jamy Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamylabs.com",
    siteName: "Jamy Labs",
    title: "Jamy Labs | Custom Software Development Company",
    description: "Building scalable software solutions that help businesses grow faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamy Labs | Custom Software Development Company",
    description: "Building scalable software solutions that help businesses grow faster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// import { Sparkles } from "./components/Sparkles";
import { Navigation } from "./components/Navigation";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`min-h-full flex flex-col font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {/* <Sparkles /> */}
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}