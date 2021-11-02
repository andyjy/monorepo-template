// @ts-check

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /*
  eslint: {
    // default directories processed by eslint - here ready to extend
    dirs: ['pages', 'components', 'lib'],
  },
  */
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
