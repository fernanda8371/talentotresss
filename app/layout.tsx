// layout.tsx
import React from "react";
import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Talento 3.0 - Atracción y Desarrollo de Talento",
  description: "Nos especializamos en asesorar sobre compensaciones en Recursos Humanos...",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
