import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
const HTMLList = () => {
  return (
    <Layout title="Listeeksempel">
      <Box padding="1em">
        <p id="unorderedList">
          <b>Ikke-ordnet liste</b>
        </p>
        <ul aria-labelledby="unorderedList">
          <li>Kikerter</li>
          <li>Linser</li>
          <li>Bønner</li>
          <li>Erter</li>
        </ul>
      </Box>
      <Box padding="1em">
        <p id="orderedList">
          <b>Ordnet liste</b>
        </p>
        <ol aria-labelledby="orderedList">
          <li>Kok risen</li>
          <li>Avkjøl risen, gjerne over natten i kjøleskapet</li>
          <li>Stek egg til det blir eggehakk, ta ut av pannen</li>
          <li>Hell alt oppi pannen og håp på det beste</li>
        </ol>
      </Box>
      <Box padding="1em">
        <p>
          <b>Beskrivende liste</b>
        </p>
        <dl>
          <dt>Gulrotsuppe</dt>
          <dd>Inneholder gulrot, rødrot og pærejuice.</dd>

          <dt>Ostesuppe</dt>
          <dd>
            Inneholder franske fancy oster med masse smak, eller norvegia.
          </dd>

          <dt>Løksuppe</dt>
          <dd>Inneholder løk og suppe.</dd>
        </dl>
      </Box>
    </Layout>
  );
};

export default HTMLList;
