import type { Metadata } from "next";
import { Header } from "@/components/header";
import { EnquireProvider } from "@/components/enquire-dialog";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Casagrand Commercial | Spaces Built for Business",
    template: "%s | Casagrand Commercial",
  },
  description:
    "A curated portfolio of commercial developments created for ambitious businesses, progressive brands and long-term investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-canvas font-sans antialiased text-ink">
        <EnquireProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <Header />
          {children}
        </EnquireProvider>
      </body>
    </html>
  );
}
