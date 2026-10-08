import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hopping | Find your garba partner and squad",
  description:
    "Searching someone for garba? Find a garba partner, join a squad or plan a dandiya night with people nearby on Hopping.",
  openGraph: {
    title: "Hopping | Find your garba partner and squad",
    description:
      "Searching someone for garba? Find a garba partner, join a squad or plan a dandiya night with people nearby on Hopping.",
    url: "https://hoppingapp.vercel.app",
    siteName: "Hopping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hopping | Find your garba partner and squad",
    description:
      "Searching someone for garba? Find a garba partner, join a squad or plan a dandiya night with people nearby on Hopping.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-paper text-ink font-sans antialiased selection:bg-marigold selection:text-black min-h-screen overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
