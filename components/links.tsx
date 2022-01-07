import { Link as ChakraLink, VisuallyHidden } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Link from "next/link";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/accesslog";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  lang?: string;
};

export const InternalLink = ({ href, children }: LinkProps) => {
  return (
    <ChakraLink variant="outline2">
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};
export const ExternalLink = ({ href, children, lang }: LinkProps) => {
  return (
    <ChakraLink variant="outline2" href={href} lang={lang}>
      {children}
      <ExternalLinkIcon aria-hidden="true" marginLeft="0.1em" />
      <VisuallyHidden>Ekstern lenke</VisuallyHidden>
    </ChakraLink>
  );
};
