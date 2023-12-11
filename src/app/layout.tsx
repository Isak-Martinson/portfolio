import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: ['/icons/favicon.ico?v=1'],
    apple: ['/icons/apple-touch-icon.png?v=1'],
    shortcut: ['/icons/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
  title: 'Isak Martinson',
  description: 'Isak Martinson - Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
