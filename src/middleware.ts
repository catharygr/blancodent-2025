import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Coincidir solo con nombres de ruta internacionalizados
  matcher: ["/", "/(en|es)/:path*"],
};
