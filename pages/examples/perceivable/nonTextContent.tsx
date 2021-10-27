import type { NextPage } from "next";
import Layout from "../../../components/layout";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon, WarningIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Text, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AccordionBox from "../../../components/accordion";

const Resources = () => {
  return (
    <Link
      href="https://www.uutilsynet.no/wcag-standarden/111-ikke-tekstlig-innhold-niva/87"
      isExternal
    >
      uutilsynet | Ikke-tekslig innhold{" "}
      <ExternalLinkIcon mx="2px" aria-label="Ekstern lenke" />
    </Link>
  );
};

const FormSolutionExample = () => {
  return (
    <form>
      <FormControl id="email">
        <FormLabel>E-postadresse</FormLabel>
        <Input
          type="email"
          aria-invalid="true"
          id="emailError"
          w="90%"
          borderColor="red.500"
          borderWidth="4px"
        />
        {/* Ikonet skjules med aria-hidden fordi den samme informasjonen blir
        kommunisert tekslig Ett til element som kommuniserer den samme
        informasjonen kan være forstyrrende */}
        <WarningIcon w={8} h={8} color="red.500" aria-hidden="true" />
        <div>
          <span>Epostadressen mangler @</span>
        </div>
      </FormControl>
    </form>
  );
};

const FormExample = () => {
  return (
    <form>
      <FormControl id="email">
        <FormLabel>E-postadresse</FormLabel>
        <Input type="email" w="90%" borderColor="red.500" borderWidth="4px" />
        <WarningIcon w={8} h={8} color="red.500" />
      </FormControl>
    </form>
  );
};

const NonTextContent: NextPage = () => {
  return (
    <Layout title="Ikke-tekstlig innhold">
      <Heading as="h1">Ikke-tekslig innhold</Heading>
      <Heading as="h2">Skjemaelementer</Heading>
      <Text>
        Ikoner brukes iblant for å beskrive feil i skjema, disse gjør det
        tydeligere for brukere hva som er galt.
      </Text>
      <Text>
        Men å kun kommunisere feil med bruk av ikoner uten alternativ tekst gir
        ikke informasjon til hjelpemidler om at en feil faktisk har oppstått
      </Text>
      <FormExample />

      <AccordionBox title="Løsningsforslag">
        <Heading>Hello world</Heading>
        <Text>Some text</Text>
        <FormSolutionExample />
      </AccordionBox>
      <Resources />
    </Layout>
  );
};

export default NonTextContent;
