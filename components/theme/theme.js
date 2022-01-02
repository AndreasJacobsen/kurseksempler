import { extendTheme } from "@chakra-ui/react";
import components from "./components";

// Se alle defaults på https://github.com/chakra-ui/chakra-ui/tree/master/packages/theme/src/foundations
const theme = extendTheme({
  shadows: {
    outline: "0 0 0 3px #FE5F55",
  },
  styles: {
    //https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/shadows.ts
    global: {
      body: {
        bg: "#EEF5DB",
        _hover: {},
      },
    },
  },

  //se https://gitThub.com/chakra-ui/chakra-ui/blob/master/packages/theme/src/foundations/colors.ts for eksempler
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    brand: {
      900: "hotpink",
      800: "#153e75",
      700: "#2a69ac",
    },
    redBrandColor: "#D03127",
    secondaryRedColor: "#FA5E5F",
    lightGreenBackground: "#EEF5DB",
    brandGreen: "#c7efcf",
    brandBrown: "#392733",
    brandYellow: "#F5B700",
  },
  // Refert av width, height, maxWidth, minWidth, maxheight og minHeight
  sizes: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
    xxxl: "120em",
  },

  // Media query breakpoints
  //breakpoints: ["30em", "48em", "62em", "80em"],
  //Refferert av padding, marking, top, left, right og bottom-stiler
  // se https://github.com/chakra-ui/chakra-ui/blob/master/packages/theme/src/foundations/spacing.ts for eksempel
  space: {
    px: "1px",
    80: "20rem",
    96: "24rem",
  },
  // fonts: {
  //   body: "system-ui, sans-serif",
  //   heading: "Graphik, Helvetica, Arial, San-serif",
  //   mono: "Menlo, monospace",
  // },
  components,
});

// export default extendTheme(theme);
export default theme;
