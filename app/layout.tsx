import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler';

export const dynamic = 'force-dynamic';

const oswald = Oswald({ subsets: ['latin', 'cyrillic'], variable: '--font-display', weight: ['400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans' });

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'http://localhost:3000'),
  title: 'Барбершоп Борода — мужские стрижки в Москве',
  description: 'Профессиональные мужские стрижки, уход за бородой и укладки в барбершопе Борода. Опытные мастера, уютная атмосфера, удобное расположение в центре Москвы.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Барбершоп Борода — мужские стрижки в Москве',
    description: 'Профессиональные мужские стрижки и уход за бородой в центре Москвы',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${oswald.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        {children}
        <ChunkLoadErrorHandler />
      </body>
    </html>
  );
}
