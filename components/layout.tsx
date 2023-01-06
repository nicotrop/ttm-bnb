import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>To The Moun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://tothemoun.com/wp-content/uploads/2021/05/cropped-Logo-Moun.png"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}