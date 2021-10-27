import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Forside">
      <main className={styles.main}>
        <h1 className={styles.title}>Universell utforming eksempler</h1>
      </main>
    </Layout>
  );
};

export default Home;
