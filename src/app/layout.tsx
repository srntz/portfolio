import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavigationProvider from "@/components/NavigationProvider";
import localFont from "next/font/local";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const nohemi = localFont({
  src: [
    {
      path: "../../public/fonts/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Denis Pechenkin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${nohemi.variable} antialiased`}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
