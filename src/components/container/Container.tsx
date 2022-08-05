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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{children}</Layout>
    </>
  );
};
