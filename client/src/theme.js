// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#FFE0D5",
      100: "#FFC1AB",
      200: "#FF9F7D",
      300: "#FF7D4F",
      400: "#FF642D",
      500: "#FA4100",
      600: "#D23700",
      700: "#A82C00",
      800: "#862300",
      900: "#5C1800",
    },
  };
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // 다크모드
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                mediumLight: colorTokens.grey[500],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // 라이트모드
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                medium: colorTokens.primary[300],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                mediumLight: colorTokens.grey[200],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      title: {
        fontFamily: ["Shrikhand", "sans-serif"].join(","),
      },
      typography: {
        fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["IBM Plex Sans KR", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };