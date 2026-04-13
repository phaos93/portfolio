import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pedro Henrique | Full Stack Developer",
    template: "%s | Pedro Henrique",
  },
  description:
    "Desenvolvedor Full Stack de Salvador, Bahia. Especialista em TypeScript, React, Next.js, Node.js e soluções em nuvem.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Salvador",
    "Bahia",
    "Brazil",
    "Portfolio",
    "Desenvolvedor",
  ],
  authors: [{ name: "Pedro Henrique Araújo Oliveira Silva" }],
  openGraph: {
    title: "Pedro Henrique | Full Stack Developer",
    description:
      "Full Stack Developer from Salvador, Bahia. Specialized in TypeScript, React, Next.js, Node.js, and cloud solutions.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "Pedro Henrique Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Henrique | Full Stack Developer",
    description:
      "Full Stack Developer from Salvador, Bahia. Specialized in TypeScript, React, Next.js, Node.js, and cloud solutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg font-sans text-text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
