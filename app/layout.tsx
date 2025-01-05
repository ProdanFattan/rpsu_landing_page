import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";

const raleway = localfont({
  src: [
    {
      path: "../public/fonts/Raleway-VariableFont_wght.ttf",
    },
  ],

  variable: "--font-raleway",
});
const open_sans = localfont({
  src: [
    {
      path: "../public/fonts/OpenSans-VariableFont_wght.ttf",
    },
  ],

  variable: "--font-open-sans",
});
const notable = localfont({
  src: [
    {
      path: "../public/fonts/Notable-Regular.ttf",
    },
  ],

  variable: "--font-notable",
});
const Poiret = localfont({
  src: [
    {
      path: "../public/fonts/PoiretOne-Regular.ttf",
    },
  ],

  variable: "--font-poiret",
});
const montserrat = localfont({
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
    },
  ],

  variable: "--font-montserrat",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${raleway.variable} ${open_sans.variable} ${notable.variable} ${Poiret.variable} ${montserrat.variable}`}
      >
        <div className=" mx-auto overflow-hidden bg-section_back">
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
