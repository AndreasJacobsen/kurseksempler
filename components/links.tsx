import { Link as ChakraLink, VisuallyHidden } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Link from "next/link";

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
};
export const InternalLink = ({ href, children }: InternalLinkProps) => {
  return (
    <ChakraLink variant="outline2">
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};
export const ExternalLink = ({ href, children }: InternalLinkProps) => {
  return (
    <ChakraLink variant="outline2" href={href}>
      {children}
      <ExternalLinkIcon aria-hidden="true" marginLeft="0.1em" />
      <VisuallyHidden>Ekstern lenke</VisuallyHidden>
    </ChakraLink>
  );
};
