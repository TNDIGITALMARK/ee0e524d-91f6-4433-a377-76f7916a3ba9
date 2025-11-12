import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StepMax Sneakers - Os Melhores Tênis no Melhor Preço",
  description: "Loja de tênis originais com entrega rápida em todo o Brasil. Parcelamento em até 10x. Nike, Adidas, Vans e mais.",
  keywords: ["loja de tênis", "comprar tênis online", "tênis originais", "nike", "adidas", "vans"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          <ZyloProvider>
            <CartProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
              >
                <TooltipProvider>
                  <Header />
                  <main className="min-h-screen">{children}</main>
                  <Footer />
                  <WhatsAppButton />
                  <Toaster />
                  <Sonner />
                </TooltipProvider>
              </ThemeProvider>
            </CartProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
