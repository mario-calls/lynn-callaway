import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lynn Callaway | Marketing Strategist & Brand Consultant",
  description:
    "Lynn Callaway is an entrepreneur and marketing strategist who builds growth for social impact brands and community-rooted businesses.",
  openGraph: {
    title: "Lynn Callaway | Marketing Strategist & Brand Consultant",
    description:
      "Lynn Callaway is an entrepreneur and marketing strategist who builds growth for social impact brands and community-rooted businesses.",
    url: "https://www.lynncallaway.co",
    siteName: "Lynn Callaway",
    images: [{ url: "https://www.lynncallaway.co/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynn Callaway | Marketing Strategist & Brand Consultant",
    description:
      "Lynn Callaway is an entrepreneur and marketing strategist who builds growth for social impact brands and community-rooted businesses.",
    images: ["https://www.lynncallaway.co/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
