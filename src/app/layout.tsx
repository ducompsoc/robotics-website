import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durham Robotics Society",
  description: "Learn electronics, 3D modelling, and programming!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", rubik.className)}>
      <body className="min-h-full flex flex-col theme-gradient">
        {children}
      </body>
    </html>
  );
}
