import "@/assets/global-styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SkipLink from "@/components/SkipLink/SkipLink";
import { routing } from "@/i18n/routing";
import { MotionConfig } from "motion/react";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

// Load the local font
const monaSansFont = localFont({
  src: "../../assets/fonts/Mona-Sans.woff2",
  display: "fallback",
  fallback: ["system-ui", "arial", "sans-serif"],
  // weight: "100 900",
});

// Generate localised metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
  };
}

// Generate static paths for all locales - i18n stuff
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
  // Enable static rendering
  setRequestLocale(locale);
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = await getTranslations("SkipLinkMain");

  return (
    <html
      lang={locale}
      className={monaSansFont.className}
    >
      <body className="layout-grid">
        <MotionConfig reducedMotion="user">
          <NextIntlClientProvider messages={messages}>
            <SkipLink
              link="main"
              // link={t("href")}
              content={t("content")}
            />
            <Header />
            {children}
            <Footer />
            <div id="nav-menu-root"></div>
          </NextIntlClientProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
