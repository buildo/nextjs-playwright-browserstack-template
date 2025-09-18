import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buildo Next.js App</title>
        <meta
          name="description"
          content="A simple Next.js application displaying a title and description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
        ></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Buildo Next.js App</h1>
        <p className={styles.description}>
          This is a simple Next.js application displaying a title and
          description.
        </p>
      </div>
    </>
  );
}
