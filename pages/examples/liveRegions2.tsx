import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../../components/layout";
const LiveRegions2 = () => {
  const [liveMessage, setLiveMessage] = useState(false);
  const [wrongLiveMessage, setWrongLiveMessage] = useState(false);

  return (
    <Layout title="Live regioner">
      <Heading as="h1">Live regioner i React</Heading>
      <p>Live regioner skal lastes inn når siden laster, ikke etter.</p>
      <p>
        Skjermlesere ser etter endringer i live regioner, første gang en region
        laster er det ingen endringer
      </p>
      <Box border="solid black 2px" p="2em" margin="1em">
        <Button colorScheme="teal" onClick={() => setLiveMessage(!liveMessage)}>
          Vis live melding som virker
        </Button>
        <div aria-live="assertive">
          {liveMessage && (
            <Text fontSize="1.5em">Du aktiverte ett live område!</Text>
          )}
        </div>
      </Box>

      <Box border="solid black 2px" p="2em" margin="1em">
        <Button
          colorScheme="teal"
          onClick={() => setWrongLiveMessage(!wrongLiveMessage)}
        >
          Vi live melding som kanskje virker
        </Button>
        {wrongLiveMessage && (
          <Text aria-live="assertive" fontSize="1.5em">
            Du aktiverte ett live område!
          </Text>
        )}
      </Box>
    </Layout>
  );
};

export default LiveRegions2;
