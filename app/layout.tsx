import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nestora — Find a Place That Feels Like Yours",
    template: "%s | Nestora",
  },
  description:
    "A thoughtful way to discover your next home. Explore considered spaces, compare illustrative residences, and take your next step with clarity.",
  applicationName: "Nestora",
  keywords: ["Nestora", "real estate", "homes", "property", "residential property"],
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Nestora — Find a Place That Feels Like Yours",
    description: "Thoughtful spaces. Clear choices. A more personal way to think about home.",
    siteName: "Nestora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestora — Find a Place That Feels Like Yours",
    description: "Thoughtful spaces. Clear choices. A more personal way to think about home.",
  },
};

export const viewport: Viewport = {
  themeColor: "#24483e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
