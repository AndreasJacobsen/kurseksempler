import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";

const TextContent = () => {
  return (
    <Layout title="tekstinnhold">
      <Heading as="h1" fontSize="1.8em">
        Tekstinnhold med skjermleser
      </Heading>
      <Text>
        Paragrafer kodes med p-elementet, en paragraf annonseres som en
        sammenhengende tekstbolk.
      </Text>
      <Heading as="h2" fontSize="1.2em" marginTop="0.2em">
        Annet språk
      </Heading>
      <Text>
        Paragrafer kan ha andre tags i seg, som span for{" "}
        <span lang="en">English text content</span> og bilder
      </Text>
      <Heading as="h2" fontSize="1.2em" marginTop="0.2em">
        Med br-tagg
      </Heading>
      <Text>
        Når vi lager nye paragrafer er det viktig å lage ny p-elmenter
        istedenfor å benytte elementer som br.
        <br /> Br lager visuelt en ny paragrafer men for hjelpemidler som
        skjermlesere oppfattes ikke det som en ny paragraf
      </Text>
      <Heading as="h2" fontSize="1.2em" marginTop="0.2em">
        Implisiv tekst
      </Heading>
      <Box>
        Tekst som lever i ett element som ikke er lagd for tekst blir ofte
        behandlet som implisiv tekst. Dette betyr feks at tekst rett i ett
        div-element ofte er funksjonelt tekst i ett p-element inni en div for
        skjermleserbrukere.
      </Box>
      <Heading as="h2" fontSize="1.2em" marginTop="0.2em">
        Med paragrafer
      </Heading>
      <Text>
        Klokken 14.10 torsdag ble svanen som er avbildet pågrepet i Os sentrum,
        sør for Bergen.
      </Text>
      <Text>
        Politiet fikk meldingen etter at svanen hadde vært aggressiv mot
        forbipasserende i byen.
      </Text>
      <Text>
        – Svanen er ikke kjent av politiet fra før av, sier operasjonsleder
        Stine Mjelde i Vest politidistrikt til VG
      </Text>
      <Heading as="h2" fontSize="1.2em" marginTop="0.2em">
        Uten paragrafer
      </Heading>
      Klokken 14.10 torsdag ble svanen som er avbildet pågrepet i Os sentrum,
      sør for Bergen. Politiet fikk meldingen etter at svanen hadde vært
      aggressiv mot forbipasserende i byen. – Svanen er ikke kjent av politiet
      fra før av, sier operasjonsleder Stine Mjelde i Vest politidistrikt til
      VG.
    </Layout>
  );
};

export default TextContent;
