import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";
import { AccessTokenProvider } from "../hooks/accessTokenProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <AccessTokenProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AccessTokenProvider>
    </UserProvider>
  );
}
