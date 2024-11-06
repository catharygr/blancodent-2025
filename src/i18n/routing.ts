import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Una lista de todos los locales que son compatibles
  locales: ["en", "es"],

  // Usado cuando no coincide ningún locale
  defaultLocale: "en",
});

// Envoltorios ligeros alrededor de las APIs de navegación de Next.js
// que considerarán la configuración de enrutamiento
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
