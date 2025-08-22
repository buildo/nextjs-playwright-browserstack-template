import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

export default function Home() {
  const HydrationButton = dynamic(
    () => import("../components/HydrationButton"),
    {
      ssr: false,
      loading: () => <p>Loading component...</p>,
    }
  );
  return (
    <>
      <Head>
        <title>Buildo Next.js App</title>
        <meta
          name="description"
          content="A simple Next.js application displaying a title and description"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Buildo Next.js App</h1>
        <p className={styles.description}>
          This is a simple Next.js application displaying a title and
          description.
        </p>
        <HydrationButton />
      </div>
    </>
  );
}
