

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
  description: "Connecting Communities, Building Careers we revolutionize education by connecting learners with top colleges and resources",
  
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
          <meta name="description" content="Connecting Communities,
Building Careers we revolutionize education by connecting learners with top colleges and resources" />
  <meta name="keywords" content="orbit, orbbitt, orbbitt.in, education, college finder" />
        <meta name="google-site-verification" content="8E4pLYMXLT2QnpN2tQNiL9Jd6pV99KhzQLMrsFG4Vkk" />
        <meta name="google-adsense-account" content="ca-pub-1275542292926934"></meta>
        <link rel="shortcut icon" href="/public/28314227_6-ai.svg" type="image/x-icon" />
        {children}
      </body>
    </html>
  );
}
