import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
})

const siteUrl = "https://a-zesoria.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A-ZESORIA | Consultoría industrial con IA",
    template: "%s | A-ZESORIA",
  },
  description:
    "Consultoría industrial para diagnosticar operaciones, localizar plantas y CEDIS e implementar mejoras con inteligencia artificial y más de 30 años de experiencia.",
  keywords: [
    "consultoría industrial",
    "diagnóstico operacional con IA",
    "localización de plantas industriales",
    "implementación de CEDIS",
    "productividad industrial",
  ],
  applicationName: "A-ZESORIA",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "A-ZESORIA",
    title: "A-ZESORIA | Consultoría industrial con IA",
    description:
      "Diagnóstico operacional, localización estratégica e implementación de plantas industriales y CEDIS.",
    images: [{ url: "/logo.svg", alt: "A-ZESORIA" }],
  },
  twitter: {
    card: "summary",
    title: "A-ZESORIA | Consultoría industrial con IA",
    description:
      "Soluciones de productividad y operación industrial respaldadas por datos e inteligencia artificial.",
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
