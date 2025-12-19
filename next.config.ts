import type { NextConfig } from "next";
// i18n plugin
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    `;
// upgrade-insecure-requests;

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        // Apply headers to all routes
        // source: "/:path*",
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};
// export by default by next sin intl plugin;
// export default nextConfig;

// MDX config
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Export with i18n plugin
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withMDX(nextConfig));
