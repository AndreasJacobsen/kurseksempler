import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/layout";

interface ContainerProps {
  children: React.ReactNode;
}

const LinkContainer = ({ children }: ContainerProps) => {
  return (
    <Box border="solid black 2px" margin="1em" padding="0.5em">
      {children}
    </Box>
  );
};
const LinkRole = () => {
  return (
    <Layout title="Lenker og role">
      <Heading as="h1">Lenker kodet på forskjellige måter</Heading>
      <LinkContainer>
        <Heading as="h2" fontSize="1.2em">
          Lenke som a-tag
        </Heading>
        <Text>Fungerer som en vanlig lenke.</Text>
        <Text>
          Kan tab, pil og hurtignavigeres til og er synlig i lenkelisten
        </Text>
        <Link href="/eksempler/lenkeRolle" textDecoration="underline">
          Til startsiden
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Heading as="h2" fontSize="1.2em">
          Lenke som knapp
        </Heading>
        <Text>
          Kan tabnvavigeres til, men gir ikke programmatisk informasjon om at
          elementet er en lenke
        </Text>
        <Text>Er ikke synlig i lenkelisten</Text>
        <Button variant="solid" colorScheme="teal">
          Til startsiden
        </Button>
      </LinkContainer>
      <LinkContainer>
        <Heading as="h2" fontSize="1.2em">
          Lenke som div med role
        </Heading>
        <Text>Ikke mulig å tabnavigere til</Text>
        <Text>Er synlig i lenkelisten, men fortsatt en dårlig løsnings</Text>
        <Link
          as="div"
          role="link"
          href="/eksempler/lenkeRolle"
          textDecoration="underline"
        >
          Til startsiden
        </Link>
      </LinkContainer>
    </Layout>
  );
};
export default LinkRole;
