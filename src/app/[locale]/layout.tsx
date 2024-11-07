import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Generar las rutas estáticas para cada idioma - i18n
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
// Generar los metadatos para cada idioma - i18n
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
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

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
