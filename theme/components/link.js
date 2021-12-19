//https://github.com/chakra-ui/chakra-ui/blob/develop/packages/theme/src/components/link.ts
const Link = {
  baseStyle: {
    cursor: "pointer",
    color: "redBrandColor",
    fontWeight: "bold",
    textDecoration: "underline",
    _focus: {
      boxShadow: "0 0 0 5px #D03127",
    },
  },
  variants: {
    outline2: {
      color: "brandBrown",
      _focus: {
        boxShadow: "0 0 0 5px #392733",
      },
    },
    outline: {
      color: "secondaryRedColor",
      _focus: {
        boxShadow: "0 0 0 5px #FA5E5F",
      },
    },
    noUnderline: {
      textDecoration: "none",
      _focus: {
        textDecoration: "none",
      },
    },
  },

  // Vi kan globalt sette farger, men ved å sette dem til feks svart mister vi contrast på lenker der
  // Vi bør finne en global hover og focus farge, så sette custom på de som bryter kontrast
  // _hover: {
  //   color: "brandBrown",
  // },
  // _focus: {
  //   color: "brandBrown",
  // },
};

export default Link;
