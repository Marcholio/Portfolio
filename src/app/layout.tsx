import type { Metadata } from "next";
import { Albert_Sans as defaultFont } from "next/font/google";
import "./globals.css";

const raleway = defaultFont({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Markus Tyrkkö | Portfolio",
  description: "Welcome, let me introduce you to some of my projects!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
