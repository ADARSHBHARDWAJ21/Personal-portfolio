import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Adarsh Bhardwaj — Full Stack Developer",
  description: "Portfolio of Adarsh Bhardwaj, a passionate Full Stack Developer specializing in modern web technologies, building scalable applications with React, Next.js, and Python. Explore my projects, experience, and get in touch.",
  keywords: ["Software Engineer", "Next.js", "React", "JavaScript", "Tailwind CSS", "Node.js", "Portfolio", "Developer", "Full Stack Developer", "Web Development"],
  authors: [{ name: "Adarsh Bhardwaj" }],
  creator: "Adarsh Bhardwaj",
  metadataBase: new URL("https://adarshbhardwaj.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adarshbhardwaj.dev",
    siteName: "Adarsh Bhardwaj Portfolio",
    title: "Adarsh Bhardwaj — Full Stack Developer",
    description: "Portfolio of Adarsh Bhardwaj, a passionate Full Stack Developer specializing in modern web technologies, building scalable applications with React, Next.js, and Python. Explore my projects, experience, and get in touch.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adarsh Bhardwaj — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Bhardwaj — Full Stack Developer",
    description: "Portfolio of Adarsh Bhardwaj, a passionate Full Stack Developer specializing in modern web technologies, building scalable applications with React, Next.js, and Python. Explore my projects, experience, and get in touch.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}

