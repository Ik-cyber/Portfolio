import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Footer from "@/components/Footer";
import StarField from "@/components/ThreeD";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mPlusRounded.className}>
      <body className="bg-black text-neutral-200 font-sans min-h-screen flex flex-col">
        <StarField />
        <main className="flex-grow container mx-auto p-4 max-w-3xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
