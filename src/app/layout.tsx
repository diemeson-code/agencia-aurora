
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Aurora | Design, Marketing e Tecnologia",
  description:
    "Transformamos ideias em experiências digitais com estratégia, design e tecnologia. Conheça as soluções da Agência Aurora.",
  keywords: [
    "Agência digital",
    "Design",
    "Marketing digital",
    "Desenvolvimento web",
    "Branding",
  ],
  openGraph: {
    title: "Agência Aurora | Ideias que inspiram",
    description:
      "Criatividade, estratégia e tecnologia para marcas que querem evoluir.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}


