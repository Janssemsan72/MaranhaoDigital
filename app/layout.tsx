import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dados – Maranhão Digital Juliana Maranhao Paiva de Sousa",
  description:
    "Soluções Estratégicas em Promoção, Conteúdo e Capacitação. Atuamos de forma integrada na promoção de vendas, produção de conteúdos editoriais e desenvolvimento profissional.",
  other: {
    "facebook-domain-verification": "d9l0av2kx92r5a4rqkhqyfgbgm5t7y",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
