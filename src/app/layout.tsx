import { NextUIProvider } from "@nextui-org/system";
import { ReduxProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
