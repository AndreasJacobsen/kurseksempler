import React from "react";
import Layout from "../../components/layout";
import {
  LiveForm,
  ShoppingCart,
} from "../../components/liveRegion/liveRegionComponents";

const LiveRegions = () => {
  return (
    <Layout title="live regioner">
      <LiveForm />
      <ShoppingCart />
    </Layout>
  );
};
export default LiveRegions;
