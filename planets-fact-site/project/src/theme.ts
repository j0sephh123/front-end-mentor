import { createStitches, globalCss } from "@stitches/react";

const colors = {
  white: "#fff",
  black: "#070724",
  darkGray: "#38384F",
  mediumGray: "#979797", // Not included in Figma, but present in the designs
  lightGray: "#838391",
  teal: "#419EBB",
  yellow: "#EDA249",
  purple: "#6f2ed6",
  orange1: "#D14C32",
  orange2: "#D83A34",
  orange3: "#CD5120",
  green: "#1ec2a4",
  blue: "#2d68f0",
};

const fonts = {
  SpartanRegular: "SpartanRegular",
  SpartanBold: "SpartanBold",
  AntonioMedium: "AntonioMedium",
};

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: fonts.SpartanRegular,
      src: "url(src/assets/fonts/Spartan-Regular.ttf)",
    },
    {
      fontFamily: fonts.SpartanBold,
      src: "url(src/assets/fonts/Spartan-Bold.ttf)",
    },
    {
      fontFamily: fonts.AntonioMedium,
      src: "url(src/assets/fonts/Antonio-Medium.ttf)",
    },
  ],
  "*": {
    fontFamily: fonts.SpartanRegular,
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

export const { styled } = createStitches({
  media: {
    sm: `(max-width: ${breakpoints.mobile}px)`, // TODO is this necessary ?
    md: `(min-width: ${breakpoints.mobile + 1}px)`,
    lg: `(min-width: ${breakpoints.tablet + 1}px)`,
  },
  theme: {
    colors,
    fontSizes: {
      xxs: "9px",
      xs: "11px",
      s: "12px",
      sm: "14px",
      md: "28px",
      l: "40px",
      xl: "80px",
    },
    lineHeights: {
      sm: "22px",
      md: "25px",
      l: "52px",
      xl: "103px",
    },
    letterSpacings: {
      tabs: "1.93px",
      h2: "-1.5px",
      h3: "2.6px",
      h4: "1px",
    },
    fonts,

    // shadows: {
    //   primary: `0 10px ${colors.black}`,
    // },
    // radii: {
    //   large: "40px",
    //   small: "20px",
    // },
    // borderWidths: {
    //   primary: "3px",
    // },
    // borderStyles: {
    //   primary: "solid",
    // },
    sizes: {
      heroMobileHeight: "304px",
      heroGeologyWidth: "199px",
      heroGeologyHeight: "163px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "10px",
      4: "12px",
      5: "16px",
      6: "20px",
      7: "24px",
      8: "28px",
      9: "32px",
      10: "36px",
      11: "40px",
      12: "48px",
      13: "56px",
      14: "64px",
    },
  },
});
