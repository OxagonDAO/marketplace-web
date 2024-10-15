import { NextUIProvider } from "@nextui-org/system";
import { ReduxProvider } from "@/redux/provider";
import { Web3Provider } from "@/web3/provider";
import type { Metadata } from "next";
import { authOptions, SessionProvider } from "@/next-auth";
import { getServerSession } from "next-auth";

import "./globals.css";



export const metadata: Metadata = {
  title: "Marketplace",
  description: "Marketplace",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body >
        <SessionProvider session={session}>
          <ReduxProvider>
            <NextUIProvider>
              <Web3Provider>
                {children}
              </Web3Provider>
            </NextUIProvider>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
