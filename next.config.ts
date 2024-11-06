import type { NextConfig } from "next";

// i18n plugin
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

// Exportado por defecto por Netx.js
// export default nextConfig;

// Exportando el plugin con i18n plugin
export default withNextIntl(nextConfig);
