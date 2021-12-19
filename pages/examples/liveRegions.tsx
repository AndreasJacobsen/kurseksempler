import { Box, Button, chakra, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Layout from "../../components/layout";
type Props = {
  liveMessage: boolean;
};
type LiveRegionProps = {
  liveMessage: boolean;
  atomic?: boolean;
  children: React.ReactNode;
};

const LiveRegion = ({
  liveMessage,
  atomic = true,
  children,
}: LiveRegionProps) => {
  return (
    <div aria-live="assertive" aria-atomic={atomic}>
      {liveMessage && children}
    </div>
  );
};
const LiveForm = ({ liveMessage }: Props) => {
  return (
    <Box marginTop="1em" border="solid black 2px" padding="0.5em">
      <Heading as="h2" fontSize="1.2em">
        Handlekurv med siste vare lagt til
      </Heading>
      <form>
        <chakra.label htmlFor="email" paddingRight="0.5em">
          E-post
        </chakra.label>
        <chakra.div
          color="red"
          fontWeight="bold"
          aria-live="assertive"
          id="emailError"
        >
          <LiveRegion liveMessage={liveMessage}>
            <span className="error">Epostadresse er påkrevd</span>
          </LiveRegion>
        </chakra.div>
        <chakra.input
          type="email"
          autoComplete="email"
          id="email"
          required
          aria-describedby="emailError"
          aria-invalid={liveMessage}
          boxShadow="0 0 0 5px #000"
          _focus={{ boxShadow: "0 0 0 10px #FE5F55", border: "none" }}
        />
      </form>
    </Box>
  );
};

const ShoppingCart = ({ liveMessage }: Props) => {
  //   Med aria-atomic annonseres hele området hver gang noe i det oppdateres
  //   Så både overskriven og innholdet i span annonseres
  return (
    <Box
      aria-live="polite"
      aria-atomic="true"
      marginTop="1em"
      border="solid black 2px"
      padding="0.5em"
    >
      <Heading as="h2" fontSize="1.2em">
        Handlekurv med siste vare lagt til
      </Heading>
      <LiveRegion liveMessage={liveMessage}>
        <FaShoppingBasket aria-hidden="true" fontSize="2em" />
        <h2>Siste vare i handlekurven </h2>
        <span>Blå jeans</span>
      </LiveRegion>
    </Box>
  );
};

const MatchScore = ({ liveMessage }: Props) => {
  return (
    <Box marginTop="1em" border="solid black 2px" padding="0.5em">
      {/* 
        aria-atomic er satt til falsk så bare "Siste målskåringer" bare annonseres når regionen først laster
        Etter det annonseres kun den relevante scoren, slik slippere brukere å høre den samme informasjone om og om igjen 
    */}
      <Heading as="h2" fontSize="1.2em">
        Live fotballscoreviser
      </Heading>
      <LiveRegion liveMessage={liveMessage} atomic={false}>
        <h2>Siste målskåringer</h2>
        <span>
          Leverbasseng vs Tommelskinke{" "}
          <chakra.span fontWeight="bold">1 - 0</chakra.span>
        </span>
      </LiveRegion>
    </Box>
  );
};

const LiveRegions = () => {
  const [liveMessage, setLiveMessage] = useState(false);
  return (
    <Layout title="live regioner">
      <Button onClick={() => setLiveMessage(!liveMessage)} margin="1em">
        {liveMessage ? "Deaktiver live-regioner" : "Aktiver alle live regioner"}
      </Button>
      <LiveForm liveMessage={liveMessage} />
      <ShoppingCart liveMessage={liveMessage} />
      <MatchScore liveMessage={liveMessage} />
    </Layout>
  );
};
export default LiveRegions;
