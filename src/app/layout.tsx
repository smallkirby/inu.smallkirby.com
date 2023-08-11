import '@/app/globals.css';
import Header from '@/components/common/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'smallkirby',
  description: 'Dog dog dog, echo smallkirby',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gv-bg0 text-gv-fg0">
        <Header />
        <div className="mx-auto px-2 py-8 md:w-2/3">{children}</div>
      </body>
    </html>
  );
}
