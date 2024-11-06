import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Clínica Dental Blancodent - Tus dentistas en Las Palmas",
  description:
    "Clínica dental en Las Palmas, BLANCODENT. Dentistas en Las Palmas. Dentistas en Mesa y López. Expertos en ortodoncia, endodoncia, tratamiento del bruxismo, periodoncia e implantología dental. Puedes encontrar todas las especialidades odontológicas en BLANCODENT.",
};
// Generar las rutas estáticas para cada idioma - i18n
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
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
