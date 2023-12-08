import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MacroMaster",
  description: "Achieve your fitness goals effortlessly, ensuring a personalized and enjoyable path to a healthier lifestyle.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Provider>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
