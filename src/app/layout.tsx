import "./globals.css";
import FlashMessage from "@/components/flashMessage";
import Stylesheet from "@/components/stylesheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diego Enriquez-Serrano",
  description: "Show off your creative side.",
};

const stylesheets = [
  "root",
  "index",
  "background",
  "border",
  "color",
  "container",
  "font",
  "fx",
  "margin",
  "opacity",
  "padding",
  "position",
  "size",
  "text",
  "orbitron",
  "opensans-regular",
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base: string | undefined = process.env.NEXT_PUBLIC_STYLES_BASE_URL;

  return (
    <html lang="en" className="max-width-view-100">
      <head>
        {stylesheets.map((sheet) => (
          <Stylesheet key={sheet} base={base} sheet={sheet} />
        ))}
      </head>
      <body className="text-color-white surface-char max-width-view-100">
        {children}
        <FlashMessage />
      </body>
    </html>
  );
}
