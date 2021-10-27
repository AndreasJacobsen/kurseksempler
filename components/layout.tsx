import { Container } from "@chakra-ui/react";
import Head from "next/head";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

// const Layout: React.FC<Props> = ({ children, title }) => {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <Container>
//         <main>{children}</main>
//         <footer>Her er en footer</footer>
//       </Container>
//     </>
//   );
// };

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <main>{children}</main>
        <footer>Her er en footer</footer>
      </Container>
    </>
  );
};
export default Layout;
