import { useEffect, useRef } from "react";
import Layout from "../../components/layout";

const FocusExamplePage = () => {
  // Hook med tom referanse, populeres med referanse til første overskrift ved sidelast
  const pageRef = useRef(null);
  // Setter fokus en gang når siden laster
  useEffect(() => {
    pageRef.current.focus();
  }, []);

  return (
    <Layout>
      {/* 
         h1 er ett ikke-fokuserbart element 
         tabindex-1 brukes for å kunne programmatisk sette fokus på ett ikke-fokuserbart element 

         ref populerer useRef-verdien med en referanse til overskriften så fokus kan settes dit. 
        */}
      <h1 as="h1" ref={pageRef} tabIndex="-1">
        Programmatisk fokushåndtering
      </h1>
      <p>Sett fokus til første h1 eller main-elementet.</p>
      <p>
        Da slipper brukere å navigere igjennom navigasjonsmenyen på alle sidene
      </p>
    </Layout>
  );
};
export default FocusExamplePage;
