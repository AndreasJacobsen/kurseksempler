import { Button, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../../../components/layout";

const ElementsPage2 = () => {
  return (
    <Layout title="Fokusside">
      <Heading>Side 2</Heading>
      <Button colorScheme="teal">Knapp som ikke gjør noenting :)</Button>
      <Text>Dette er en side vi kan gå til med en lenke</Text>
      <Text>Hvor lander fokus når vi kommer hit?</Text>
      <ChakraLink textDecoration="underline">
        <Link href="/examples/changes/elementsPage1">
          Tilbake til forrige side
        </Link>
      </ChakraLink>
    </Layout>
  );
};
export default ElementsPage2;
