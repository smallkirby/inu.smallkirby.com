import '@/app/globals.css';
import Footer from '@/components/common/Footer';
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
      <body className="flex min-h-screen flex-col bg-gv-bg0 text-gv-fg0">
        <Header />
        <div className="mx-auto mb-8 flex-1 px-2 md:w-2/3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
