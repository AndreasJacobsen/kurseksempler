// https://github.com/chakra-ui/chakra-ui/blob/develop/packages/theme/src/components/input.ts#L3
const Input = {
  variants: {
    outline: {
      field: {
        _invalid: {
          borderColor: "redBrandColor",
        },
        bg: "brandGreen",
        _focus: {
          boxShadow: "0 0 0 5px #FE5F55",
          border: "none",
        },
        _hover: {
          borderColor: "redBrandColor",
        },
      },
    },
  },
};

export default Input;
