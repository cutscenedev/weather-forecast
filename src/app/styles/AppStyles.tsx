import { GlobalStyles, GlobalStylesProps } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { PropsWithChildren } from "react";


function AppStyles({ children }: PropsWithChildren) {
  const globalStyles: GlobalStylesProps["styles"] = {
    "height": "100%",
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: globalStyles,
          body: globalStyles,
          "div#root": {
            ...globalStyles,
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "stretch",
          },
        }}
      />
      <CssBaseline enableColorScheme />
      {children}
    </>
  );
}

export default AppStyles;
