import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const torusPro = localFont({
  src: "../../public/fonts/TorusPro.ttf",
  variable: "--font-torus",
});

export const metadata: Metadata = {
  title: "Yummeals - Order Delicious Meals Online",
  description: "Get fresh, restaurant-quality meals delivered fast. Browse our menu, order your favorites, and enjoy quick delivery from Yummeals - your neighborhood's top food delivery service.",
  keywords: ["food delivery", "online ordering", "restaurant", "takeout", "meal delivery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W44X9P3T');
          `}
        </Script>
      </head>
      <body className={`${torusPro.variable} ${inter.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W44X9P3T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
