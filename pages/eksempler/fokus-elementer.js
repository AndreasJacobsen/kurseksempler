import Layout from "../../components/layout";
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const FocusElements = () => {
  const formMessage = useRef(null);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [activationFocus, setActivationFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [insideMouse, setInsideMouse] = useState(false);
  const [formFocus, setFormFocus] = useState(false);
  useEffect(() => {
    if (formMessage?.current) {
      formMessage.current.focus;
    }
  }, [formFocus]);

  const FormFocus = () => {
    return (
      <Box border="solid black 2px" padding="1em" marginTop="0.5em">
        <form>
          <FormControl>
            <FormLabel htmlFor="email">Adresse</FormLabel>

            <Input
              id="email"
              type="email"
              onFocus={() => setFormFocus(!formFocus)}
              onMouseEnter={() => setFormFocus(true)}
              onMouseLeave={() => setFormFocus(false)}
            />
            {formFocus && (
              <Text ref={formMessage} tabIndex={-1}>
                Den adressen du bor på nå
              </Text>
            )}
          </FormControl>
        </form>
      </Box>
    );
  };
  const FocusButton = () => {
    return (
      <Flex border="solid black 2px" padding="1em">
        <Box>
          <Button
            onFocus={() => setKeyboardFocus(!keyboardFocus)}
            onClick={() => setActivationFocus(!activationFocus)}
            onMouseEnter={() => setInsideMouse(true)}
            onMouseLeave={() => setInsideMouse(false)}
          >
            Fokuser på meg!
          </Button>
          {keyboardFocus && <p>Du fokuserte på knappen</p>}
          {activationFocus && <p>Du klikket på knappen</p>}
          {hover && <p>Du tok musa over knappen</p>}
        </Box>
        <Box margin="auto" aria-live="polite">
          {insideMouse && (
            <Box bg="teal" color="white" padding="0.5em">
              Musepekeren din er på knappen
            </Box>
          )}
        </Box>
      </Flex>
    );
  };

  return (
    <Layout title="Forskjellige fokus">
      <Heading as="h1" fontSize="2em">
        Fokuser på knappen for å se endringer
      </Heading>
      <Text>
        Vanligvis anbefaler vi aldri å kjøre noe funksjonalitet bare når en ett
        element får fokus. Her gjør vi det for å vise hvor irriterende det kan*
      </Text>

      <FocusButton />
      <FormFocus />
    </Layout>
  );
};
export default FocusElements;
