import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {
  Button, Box
    } from "@chakra-ui/react";
import { ClickHereButton, ClickHereLinks } from "./components/clickHere";

const Home: NextPage = () => {
  return (
    <Layout title="Forside">
      <main className={styles.main}>
        <h1 className={styles.title}>Universell utforming eksempler</h1>
        <Box p="2em" ><Button colorScheme="green">Knapp</Button></Box>
        <Button colorScheme="green" as="div">Div</Button>

      </main>
<ClickHereButton />
<ClickHereLinks /> 
    </Layout>
  );
};

export default Home;
