import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/** Navbar */}
      <Navbar />

      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Emend AI | A GPT3 Email Generator</title>
      </Head>

      {/** Main */}
      {children}

      {/** Footer */}
      <Footer />
    </main>
  );
}
