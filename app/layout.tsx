import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Direct Title Loans | Fast Cash Using Your Vehicle | Same-Day Funding",
  description: "Get fast cash using your vehicle as collateral. Car, truck, motorcycle, and RV title loans. Bad credit OK. Same-day funding available in California and Florida.",
  keywords: ["title loans", "car title loans", "fast cash", "bad credit loans", "same day funding", "vehicle title loans"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
