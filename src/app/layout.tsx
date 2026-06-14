import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Preloader } from '@/components/Preloader';
import { ScrollProgress } from '@/components/ScrollProgress';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andika - Portofolio',
  description: 'A world-class software engineer portfolio showcasing precision and creativity',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${outfit.className} bg-black text-white overflow-x-hidden antialiased`} suppressHydrationWarning>
        <ScrollProgress />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
