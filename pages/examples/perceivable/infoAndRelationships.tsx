import type { NextPage } from "next";
import Layout from "../../../components/layout";
import { Text, Heading } from "@chakra-ui/react";
const InfoAndRelationships: NextPage = () => {
  return (
    <Layout title="Informasjon og relasjoner">
      <Heading as="h1">Informasjon og relasjoner</Heading>
      <Text>
        WCAG 1.3.1 Informasjon og relasjoner er et av de bredeste kriteriene.
        Det omhandler hvordan infomrasjon, struktur og relasjoner skal være
        programmatisk tilgjengelig.
      </Text>
      <Heading as="h2">Emneknagger</Heading>

      <Heading as="h2">Tabeller</Heading>

      <Heading as="h2">Landemerker</Heading>

      <Heading as="h2">Role</Heading>

      <Heading as="h2">Gruppering av skjema</Heading>

      <Text>** Link til Inklud heading example</Text>
    </Layout>
  );
};

export default InfoAndRelationships;
