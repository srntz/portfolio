import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import NavigationProvider from "@/components/NavigationProvider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
})

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
      <body
        className={`${openSans.className} antialiased`}
      >
      <NavigationProvider>
        {children}
      </NavigationProvider>
      </body>
    </html>
  );
}
