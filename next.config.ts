import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
};

// Next-Intl
let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

// Bundle analyzer (если ANALYZE=true)
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

export default configWithPlugins;
