import localFont from "next/font/local";
import ClientLayout from "@/components/ClientLayout"; // Importamos el layout para cliente
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

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
  keywords: "películas de miedo, terror, series de terror, películas de terror, pelisdemiedo.com",
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
    icon: '/assets/favicon.png',  // Ruta del favicon en tu carpeta public
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',  // Opcional, para dispositivos Apple
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <Analytics />
    </html>
  );
}
