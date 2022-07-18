import { VisuallyHidden } from "@chakra-ui/react";
import Layout from "../../components/layout";
const ExternalLink = () => {
  return (
    <Layout>
      <a
        target="_blank"
        rel="noopener noreferrer"
        lang="en"
        href="https://www.accessibilityassociation.org/cpwacertification"
      >
        {/*  Annonseres på engelsk -*/}
        Certified Professional in Web Accessibility
        <svg aria-hidden="true">...</svg>
        {/* Annonseres på norsk  */}
        <VisuallyHidden lang="no">Ekstern lenke</VisuallyHidden>
      </a>
    </Layout>
  );
};
export default ExternalLink;
