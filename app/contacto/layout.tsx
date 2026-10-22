import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Consultoría industrial",
  description:
    "Póngase en contacto con A-ZESORIA para hablar sobre diagnóstico operacional, plantas industriales, CEDIS y productividad.",
  alternates: { canonical: "/contacto" },
}

export default function ContactoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
