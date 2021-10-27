import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const AccordionBox = ({ title, children }: Props) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem
        borderColor="black"
        borderWidth="0.15em"
        outlineColor="black"
        marginTop="1em"
      >
        <Box>
          <AccordionButton>
            <Heading as="h6" size="md" textAlign="left" flex="1">
              {title}
            </Heading>
            <AccordionIcon width="1.5em" height="1.5em" marginLeft="0.2em" />
          </AccordionButton>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </Box>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionBox;
