import { Heading, Text } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";
import Layout from "../../components/layout";

const PageFocus = () => {
  const pageRef = useRef(null);
  useEffect(() => {
    pageRef.current.focus();
  }, []);

  return (
    <Layout>
      <Heading as="h1" ref={pageRef} tabIndex="-1">
        Programmatisk fokushåndtering
      </Heading>
      <Text>Sett fokus til første h1 eller main-elementet.</Text>
      <Text>
        Da slipper brukere å navigere igjennom navigasjonsmenyen på alle sidene
      </Text>
    </Layout>
  );
};
export default PageFocus;
