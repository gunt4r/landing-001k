import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', rel: 'shortcut icon', type: 'image/x-icon' },
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-57x57.png', sizes: '57x57' },
      { url: '/favicon-60x60.png', sizes: '60x60' },
      { url: '/favicon-72x72.png', sizes: '72x72' },
      { url: '/favicon-76x76.png', sizes: '76x76' },
      { url: '/favicon-114x114.png', sizes: '114x114' },
      { url: '/favicon-120x120.png', sizes: '120x120' },
      { url: '/favicon-144x144.png', sizes: '144x144' },
      { url: '/favicon-152x152.png', sizes: '152x152' },
      { url: '/favicon-180x180.png', sizes: '180x180' },
    ],
  },
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/favicon-144x144.png',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
