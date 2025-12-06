import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KryptonArc - World's First Battery-less Modular Smart-Padlock",
  description: "KryptonArc has brought you the world's first Battery-less Smart Padlock that is also Modular, OpenSource, 3D printable and Customizable",
  keywords: ["KryptonArc", "Smart Padlock", "Battery-less", "Modular", "OpenSource", "3D Printing"],
  authors: [{ name: "Ali Sadat" }],
  openGraph: {
    title: "KryptonArc - World's First Battery-less Modular Smart-Padlock",
    description: "KryptonArc has brought you the world's first Battery-less Smart Padlock that is also Modular, OpenSource, 3D printable and Customizable",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
