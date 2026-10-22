import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de consultoría industrial",
  description:
    "Conozca nuestros servicios de diagnóstico operacional con IA, localización estratégica de plantas e implementación de CEDIS.",
  alternates: { canonical: "/servicios" },
}

export default function ServiciosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
