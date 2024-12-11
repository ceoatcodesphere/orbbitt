

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Orbbitt",
  description: "Your Collage Finder",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased bg-gradient-to-r font-sans from-gray-900 via-gray-800 to-black`}
      >
        <meta name="google-adsense-account" content="ca-pub-1275542292926934"></meta>
        <link rel="shortcut icon" href="/public/28314227_6-ai.svg" type="image/x-icon" />
        {children}
      </body>
    </html>
  );
}
