export const theme = {
  palette: {
    primary: "#1890FF"
  },
  text: {
    primary: "#262626",
    secondary: "#434343",
    tertiary: "#8C8C8C",
    disabled: "#BFBFBF"
  },
  border: {
    primary: "#F0F0F0",
    secondary: "#D9D9D9"
  },
  background: {
    primary: "#F5F5F5",
    secondary: "#FAFAFA"
  },
  common: {
    white: "#FFFFFF"
  },
  beats: {
    N: {
      border: "#4F5BAA",
      background: "#E4E7FF"
    },
    VT: {
      border: "#A3575A",
      background: "#FDE6E7"
    },
    AST: {
      border: "#A373A3",
      background: "#FBE3FB"
    },
    SVT: {
      border: "#4F5BAA",
      background: "#E4E7FF"
    },
    BRD: {
      border: "#A373A3",
      background: "#FBE3FB"
    },
    AF: {
      border: "#6AA257",
      background: "#DFFBD6"
    },
    T: {
      border: "#4F5BAA",
      background: "#E4E7FF"
    }
  }
};

export type ThemeType = typeof theme;
