import { ExternalLinkIcon, WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import "highlight.js/styles/dracula.css";
import type { NextPage } from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import images from "../../../codeExamples/images.js";
import svg from "../../../codeExamples/svg.js";
import AccordionBox from "../../../components/accordion";
import Layout from "../../../components/layout";
import dracula from "../../../theme/dracula";

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
      <FormControl isInvalid={true}>
        <FormLabel htmlFor="correctEmail">E-postadresse</FormLabel>
        <Input
          type="email"
          id="correctEmail"
          w="90%"
          borderColor="red.500"
          borderWidth="4px"
          aria-describedby="emailError"
        />
        {/* Ikonet skjules med aria-hidden fordi den samme informasjonen blir
        kommunisert tekslig Ett til element som kommuniserer den samme
        informasjonen kan være forstyrrende */}
        <WarningIcon w={8} h={8} color="red.500" aria-hidden="true" />

        {/* div eksisterer i dom når siden laster så live regionen lastes med siden */}
        <div aria-live="assertive" id="emailError">
          {/* Last feilmeldingen inni div-elementet når feilen oppstår */}
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
      <Heading as="h2">Feilmelding som ikon</Heading>
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

      <Heading as="h2">Bilder</Heading>
      <Text>
        Alle meningsbærende bilder skal ha alternativ tekst. Det kan iblant være
        vanskelig å bedømme om ett bilde faktisk er meningsbærende.
      </Text>

      <Heading as="h3">Bilder eksempel</Heading>
      <SyntaxHighlighter
        language="html"
        wrapLongLines={true}
        style={dracula}
        wrapLines={true}
      >
        {images}
      </SyntaxHighlighter>
      <Heading as="h3">SVG eksempler</Heading>
      <SyntaxHighlighter
        language="html"
        wrapLongLines={true}
        style={dracula}
        wrapLines={true}
      >
        {svg}
      </SyntaxHighlighter>
      <Resources />
    </Layout>
  );
};

export default NonTextContent;
