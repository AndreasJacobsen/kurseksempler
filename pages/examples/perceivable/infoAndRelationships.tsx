import type { NextPage } from "next";
import { ExternalLinkIcon, WarningTwoIcon } from "@chakra-ui/icons";

import Layout from "../../../components/layout";
import {
  Text,
  Heading,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
const InfoAndRelationships: NextPage = () => {
  return (
    <Layout title="Informasjon og relasjoner">
      <Heading as="h1">Informasjon og relasjoner</Heading>
      <Text>
        WCAG 1.3.1 Informasjon og relasjoner er et av de bredeste kriteriene.
        Det omhandler hvordan infomrasjon, struktur og relasjoner skal være
        programmatisk tilgjengelig.
      </Text>
      <Heading as="h2">Skjema</Heading>
      <Text>
        Selv om skjema ofte virker ganske enkle er de komplekse grafiske
        elementer med egne navigasjonsmetoder.{" "}
      </Text>
      <Text>
        Interaktive elementer bør får særlig oppmerksomhet under testing
      </Text>
      <Text>Sjekkliste for testing</Text>
      <UnorderedList>
        <ListItem>Alle skjemafelter har en tilknyttet label</ListItem>
        <ListItem>
          Påkrevde felt er visuelt markert som dette og via aria-invalid
          og/eller invalid
        </ListItem>
        <ListItem>
          Dynamiske feilmeldinger blir annonsert av hjelpeverktøy
        </ListItem>
        <ListItem>
          Farge og/eller ikoner uten alternativ tekst bruke ikke alene for å
          kommunisere feil
        </ListItem>
        <ListItem>Påkvrevde felter er markert som påkrevde</ListItem>
        <ListItem>
          Skjemafelter som kan dra nytte av autocomplete benytter autocomplete
        </ListItem>
        <ListItem>Skjema er wrappet i form</ListItem>
        <ListItem>
          Brukere får tydelig beskjed når ett skjema blir sendt inn
        </ListItem>
        <ListItem>Relaterte elementer som radioknapper skal grupperes</ListItem>
      </UnorderedList>

      <form>
        <FormControl id="email">
          <FormLabel for="email">E-post</FormLabel>
          <Input
            type="email"
            id="email"
            aria-describedby="emailError"
            isInvalid
          />
          <div className="showWhenError" aria-live="assertive" id="emailError">
            <span>Epost er påkrevd</span>{" "}
            <WarningTwoIcon color="red.500" aria-hidden="true" />
          </div>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Foretrukket mat</FormLabel>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="Sasuke">Stekt kjøtt</Radio>
              <Radio value="Nagato">Stekte grønnsaker</Radio>
              <Radio value="Itachi">Lettkokte pannekaker</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </form>

      <Heading as="h2">Tabeller</Heading>

      <Heading as="h2">Landemerker</Heading>

      <Heading as="h2">Role</Heading>

      <Text>** Link til Inklud heading example</Text>
    </Layout>
  );
};

export default InfoAndRelationships;
