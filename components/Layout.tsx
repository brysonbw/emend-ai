import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
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
    </>
  );
}
