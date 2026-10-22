import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnóstico operacional gratuito con IA",
  description:
    "Solicite un diagnóstico operacional gratuito para identificar cuellos de botella, ineficiencias y oportunidades de mejora en su empresa.",
  alternates: { canonical: "/diagnostico" },
}

export default function DiagnosticoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
