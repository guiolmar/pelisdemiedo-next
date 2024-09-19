import localFont from "next/font/local";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // Importamos el componente Script

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pelis de Miedo | Las Mejores Películas y Series de Terror",
  description: "Descubre las mejores películas de terror y series de miedo en PelisDeMiedo.com. ¡Todo el terror en un solo lugar!",
  keywords: "películas de miedo, pelis de miedo, mejores peliculas de miedo, cine de terror, series de miedo, películas de terror, estrenos de terror, clásicos del terror, horror psicológico, cine gore, películas sobrenaturales, recomendaciones de terror, terror español, thrillers de terror, series de suspense, pelisdemiedo.com",
  openGraph: {
    title: "PelisDeMiedo.com",
    description: "Las mejores películas de miedo y series de terror. ¡Todo el terror en un solo lugar!",
    url: "https://www.pelisdemiedo.com/",
    images: [
      {
        url: "https://bhha0khdarsj44ad.public.blob.vercel-storage.com/home-bg-search-4puupz3xo6jRxWcmBaiC0wkc4QDx8a.jpg",
        alt: "Imagen de fondo de PelisDeMiedo.com",
      },
    ],
  },
  icons: {
    icon: '/assets/favicon.png',
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>

        {/* Insertamos el script de anuncios de Google */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6953675843315572"
          crossorigin="anonymous"
        />

      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <Analytics />
    </html>
  );
}
