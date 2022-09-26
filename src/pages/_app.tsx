import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useState } from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/utils";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../styles/DarkTheme";
import LightTheme from "../styles/LightTheme";
import usePageLoading from "../hooks/usePageLoading";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { AgendaProvider } from "context/AgendaProvider";

// prepend = true moves MUI styles to the top so that they're loaded first.
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

interface Props extends AppProps {
  emotionCache: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const pageLoading = usePageLoading();

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AgendaProvider>
            <Navbar changeTheme={changeTheme} />
            <Box sx={{ flexGrow: 5 }}>
              {pageLoading && <Loader />}
              <Component {...pageProps} />
            </Box>
          </AgendaProvider>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
