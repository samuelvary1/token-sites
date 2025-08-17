import type { Metadata } from "next";
import { Geist, Geist_Mono, Creepster } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sawyer Token (SWYR) | Polygon",
  description: "A token for dogs who love beaches and tennis balls",
  icons: {
    icon: "/sawyer_icon.png", // Standard icon
    shortcut: "/sawyer_icon.png", // Fallback for some browsers
    apple: "/sawyer_icon.png" // Optional Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sawyer_icon.png" type="image/png" sizes="64x64" />
      </head>
        <body className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable} antialiased`}>


        {children}
      </body>
    </html>
  );
}
