import type { Metadata } from "next";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "Markus Tyrkkö | Portfolio",
  description: "Welcome, let me introduce you some of my projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
