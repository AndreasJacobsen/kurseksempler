import { useDisclosure } from "@chakra-ui/hooks";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import Layout from "../../../components/layout";

const ModalDialog = () => {
  //Inital focus to modal header
  const headerRef = useRef();
  //Focus to modal button on close
  const finalRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Åpne modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={headerRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader tabIndex={-1} ref={headerRef}>
            Modalvindu
          </ModalHeader>
          <ModalBody>
            <Text>
              {" "}
              Jeg er en modal, men jeg skulle ønske jeg var en supermodell
              istede :)
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const AccordionElements = () => {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Trekkspillelement 1
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Trekkspillelement 2
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
const ElementsPage1 = () => {
  return (
    <Layout title="Elementer med ARIA">
      <Heading as="h1" marginBottom="1em">
        Elementer med utvidet info for skjermlesere
      </Heading>
      <AccordionElements />
      <ChakraLink textDecoration="underline">
        <Link href="/examples/changes/elementsPage2">Til neste side</Link>
      </ChakraLink>
      <Box marginTop="1em">
        <ModalDialog />
      </Box>
      <Box></Box>
    </Layout>
  );
};
export default ElementsPage1;
