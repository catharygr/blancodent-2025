// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;

//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale as "en" | "es")) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
