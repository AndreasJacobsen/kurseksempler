import { Text, Box, Heading } from "@chakra-ui/react";
import { ExternalLink } from "../../components/links";
import React from "react";
import Layout from "../../components/layout";

type ContainerProps = {
  children: React.ReactNode;
};

const Languages = () => {
  const Textbox = ({ children }: ContainerProps) => {
    return (
      <Box border="solid black 2px" marginTop="0.3em" padding="0.3em">
        {children}
      </Box>
    );
  };
  const Norwegian = () => {
    return (
      <Textbox>
        <Heading as="h2" fontSize="1.2em">
          Med norsk lang
        </Heading>
        <Text>Ibsens ripsbærbusker og andre buskvekster.</Text>
      </Textbox>
    );
  };

  const English = () => {
    return (
      <Textbox>
        <Heading as="h2" fontSize="1.2em">
          Med engelsk lang
        </Heading>
        <Text lang="en">Ibsens ripsbærbusker og andre buskvekster.</Text>
      </Textbox>
    );
  };
  const EnglishNorwegian = () => {
    return (
      <Textbox>
        <Heading as="h2" fontSize="1.2em">
          Med norsk lang, engelsk tekst.
        </Heading>

        <Text lang="no">
          Ibsens red current bushes and other types of bushes.
        </Text>
      </Textbox>
    );
  };

  const PartsOfPage = () => {
    return (
      <Textbox>
        <Heading as="h2" fontSize="1.2em">
          Språk på deler av siden
        </Heading>
        <Text>
          W3C har mer informasjon om hvordan språk på deler av siden funger,
          <ExternalLink href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html">
            {" "}
            Understanding Success Criterion 3.1.2: Language of Parts
          </ExternalLink>
          .
        </Text>
      </Textbox>
    );
  };

  return (
    <Layout title="Lang-tag">
      <Heading>Lang-tag</Heading>
      <Text>
        Lang tagges brukse for sette språk på deler av siden eller hele siden
      </Text>
      <Norwegian />
      <English />
      <PartsOfPage />
      <EnglishNorwegian />
    </Layout>
  );
};
export default Languages;
