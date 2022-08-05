import { Layout } from "@/styled-components";
import Head from "next/head";
import React from "react";
import { Props } from "./container.interface";

export const Container = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="autor" content="jesus ayarza" />
        <meta name="generator" content="Next.js" />
        <link rel="icon" href="/jesuDev.ico" />
      </Head>
      <Layout>{children}</Layout>
    </>
  );
};
