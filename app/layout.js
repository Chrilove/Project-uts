'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import "./styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {

  // Untuk animasi saat mount
  useEffect(() => {
    document.body.classList.add("content-wrapper");
    const elementsToAnimate = document.querySelectorAll(".section-title, .card, .btn-primary");
    elementsToAnimate.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("zoom-in-out");
      }, index * 100);
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="A creative portfolio website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {/* ThemeProvider secara otomatis inject class `light` atau `dark` ke html/body */}
        <ThemeProvider
          attribute="data-bs-theme" // akan menambahkan attribute ini ke <html>
          defaultTheme="light"
          enableSystem={false} // jika mau manual toggle saja
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>

        <Script
          strategy="afterInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
