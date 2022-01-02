import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../components/layout";
import {
  LiveForm,
  MatchScore,
  ShoppingCart,
} from "../../components/liveRegion/liveRegionComponents";


const LiveRegions = () => {
  return (
    <Layout title="live regioner">
      <LiveForm  />
      <ShoppingCart  />
      <MatchScore  />
    </Layout>
  );
};
export default LiveRegions;
