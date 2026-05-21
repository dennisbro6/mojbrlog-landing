import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mojbrlog — tvoj osebni OS",
  description: "Vse kar potrebuješ za organizacijo dneva. Naloge, zapiski, PDF trezor in dnevnik — na enem mestu.",
  openGraph: {
    title: "mojbrlog — tvoj osebni OS",
    description: "Vse kar potrebuješ za organizacijo dneva.",
    url: "https://mojbrlog.eu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
