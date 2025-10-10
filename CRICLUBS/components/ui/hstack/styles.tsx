import { isWeb, tva } from "@gluestack-ui/utils/nativewind-utils";
// import { tva } from "@gluestack-ui/utils/nativewind-utils";

const baseStyle = isWeb
  ? "flex relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none"
  : "";

export const hstackStyle = tva({
  base: `flex-row ${baseStyle}`,
  variants: {
    p: {
      $1: "p-1",
      $2: "p-2",
      $3: "p-3",
      $4: "p-4",
      $5: "p-5",
    },
    px: {
      $1: "px-1",
      $2: "px-2",
      $3: "px-3",
      $4: "px-4",
      $5: "px-5",
    },
    py: {
      $1: "py-1",
      $2: "py-2",
      $3: "py-3",
      $4: "py-4",
      $5: "py-5",
    },
    space: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
      xl: "gap-5",
      "2xl": "gap-6",
      "3xl": "gap-7",
      "4xl": "gap-8",
    },
    reversed: {
      true: "flex-row-reverse",
    },
  },
});
