import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../../components/layout";

const Expandable = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Layout title="Eksapnderbart">
      <Box>
        <Button onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? "Mindre om aria-expanded" : "Mer om aria-expanded"}
        </Button>

        {expanded && (
          <Box>
            <Text>
              aria-expanded kan oppfattes av hjelpemidler som skjermlesere, og
              gir beskjed om ett element kan ekspanderes og om det er ekspandert
            </Text>
          </Box>
        )}
      </Box>
    </Layout>
  );
};
export default Expandable;
