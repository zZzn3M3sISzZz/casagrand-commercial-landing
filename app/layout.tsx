import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Header } from "@/components/header";
import { EnquireProvider } from "@/components/enquire-dialog";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

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
    <html lang="en" className={lora.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="bg-canvas font-sans antialiased text-ink font-normal">
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
