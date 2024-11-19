import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import "../assets/global-styles/globals.css";
import Header from "@/app/componentes/header/Header";
import SkipLink from "@/app/componentes/skip-link/SkipLink";

// Los archivos de fuentes pueden estar ubicados dentro de `app`
const monaSansFont = localFont({
  src: "../assets/fonts/Mona-Sans.woff2",
  display: "fallback",
  fallback: ["system-ui", "arial", "sans-serif"],
});

// Generar las rutas estáticas para cada idioma - i18n
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
// Generar los metadatos para cada idioma - i18n
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Activa el renderizado estático de la página en el idioma solicitado
  setRequestLocale(locale);

  // Asegúrate de que el `locale` entrante sea válido
  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  // Proporcionar todos los mensajes al lado del cliente
  // es la forma más fácil de empezar
  const messages = await getMessages();
  const t = await getTranslations("SkipLinkMain");

  return (
    <html
      lang={locale}
      className={monaSansFont.className}
    >
      <body className="layout-grid">
        <NextIntlClientProvider messages={messages}>
          <SkipLink
            link={t("href")}
            content={t("content")}
          />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
