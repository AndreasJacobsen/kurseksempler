import { Link } from "@chakra-ui/react";

const ReadMoreLinks = () => {
  let allLinks = [];
  for (let i = 0; i < 20; i++) {
    allLinks.push(<Link href="/">Les mer</Link>);
  }
  return <>{allLinks}</>;
};

export default ReadMoreLinks;
