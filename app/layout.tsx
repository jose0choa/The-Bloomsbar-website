import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundRoses from "@/components/BackgroundRoses";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The Blooms Bar",
  description: "Custom floral arrangements for every occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} bg-stone-50 text-neutral-900`}>
        <BackgroundRoses />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
