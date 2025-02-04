import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/next_ui";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/home/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});
export const metadata: Metadata = {
  title: "Epdrago",
  description: "Pagina oficial de Epdrago",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark">
        <body className={cn(" font-sans antialiased", fontSans.variable)}>
          <Providers>
            <Navbar />
            {children}
          </Providers>

          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
