import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de éxito en operaciones industriales",
  description:
    "Explore casos de éxito de A-ZESORIA y descubra cómo mejoramos productividad, costos y decisiones en operaciones industriales.",
  alternates: { canonical: "/casos-exito" },
}

export default function CasosExitoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
