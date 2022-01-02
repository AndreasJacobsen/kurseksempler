import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Forside">
      <main className={styles.main}>
        <h1 className={styles.title}>Interagerbare elmenter</h1>
        <Box>
          <p>
            <b>Knapp kodet som knapp</b>
          </p>
          <Button colorScheme="green">Klikk meg!</Button>
        </Box>
        <Box>
          <p>
            <b>Knapp kodet som div med role="button"</b>
          </p>
          <Button colorScheme="green" as="div" role="button">
            Div
          </Button>
        </Box>
        <Box>
          <p>
            <b>Slider med label</b>
          </p>
          <p id="bolleCount">Antall boller</p>

          <input
            type="range"
            min="1"
            max="10"
            step="1"
            aria-labelledby="bolleCount"
          />
        </Box>
        <Box>
          <p>
            <b>Slider uten label</b>
          </p>
          <p>Antall boller</p>
          <input type="range" min="1" max="10" step="1" />
        </Box>
      </main>
      {/* <ClickHereButton />
      <ClickHereLinks /> */}
    </Layout>
  );
};

export default Home;
