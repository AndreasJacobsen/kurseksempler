import { Box, Button, chakra, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";

type LiveRegionProps = {
  liveMessage: boolean;
  atomic?: boolean;
  children: React.ReactNode;
};

export const LiveRegion = ({
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

export const LiveForm = () => {
  const [formError, setFormError] = useState(false);
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
          <LiveRegion liveMessage={formError}>
            <span className="error">E-postadresse er påkrevd</span>
          </LiveRegion>
        </chakra.div>
        <chakra.input
          type="email"
          autoComplete="email"
          id="email"
          required
          aria-describedby="emailError"
          aria-invalid={formError}
          boxShadow="0 0 0 5px #000"
          _focus={{ boxShadow: "0 0 0 10px #FE5F55", border: "none" }}
        />
      </form>
      <Button onClick={() => setFormError(!formError)} marginTop="1em">
        {formError ? "Skjul skjemafeil" : "Vis skjemafeil"}
      </Button>
    </Box>
  );
};

export const ShoppingCart = () => {
  const [shoppingError, setShoppingError] = useState(false);

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
      <LiveRegion liveMessage={shoppingError}>
        <FaShoppingBasket aria-hidden="true" fontSize="2em" />
        <h2>Siste vare i handlekurven </h2>
        <span>Blå jeans</span>
      </LiveRegion>
      <Button onClick={() => setShoppingError(!shoppingError)}>
        {shoppingError ? "Skjul handlekurv" : "Vis handlekurl"}
      </Button>
    </Box>
  );
};

export const MatchScore = () => {
  const [matchScore, setMatchScore] = useState(false);

  return (
    <Box marginTop="1em" border="solid black 2px" padding="0.5em">
      {/* 
        aria-atomic er satt til falsk så bare "Siste målskåringer" bare annonseres når regionen først laster
        Etter det annonseres kun den relevante scoren, slik slippere brukere å høre den samme informasjone om og om igjen 
    */}
      <Heading as="h2" fontSize="1.2em">
        Live fotballscoreviser
      </Heading>
      <LiveRegion liveMessage={matchScore} atomic={false}>
        <h2>Siste målskåringer</h2>
        <span>
          Leverbasseng vs Tommelskinke{" "}
          <chakra.span fontWeight="bold">1 - 0</chakra.span>
        </span>
      </LiveRegion>
      <Button onClick={() => setMatchScore(!matchScore)}>
        {matchScore ? "Skjul fotballscore" : "Vis fotballscore"}
      </Button>
    </Box>
  );
};
