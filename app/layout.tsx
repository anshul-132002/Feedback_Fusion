import type { Metadata } from "next";
import { Geist, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import syncUser from "@/lib/sync-user";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Feedback Fusion - AI-Powered Feedback Analysis and Visualization",
  description: "Platform for analyzing and visualizing feedback using AI.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncUser();
  return (
    <ClerkProvider>
      <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider attribute={"class"} defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header />
            <main className="flex-1 mx-auto">{children}</main>
            <Footer />
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
