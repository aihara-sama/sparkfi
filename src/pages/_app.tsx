import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import nProgress from "nprogress";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStore, persistor, store } from "store";
import createEmotionCache from "utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>SparkFI</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <GlobalStore>
          <PersistGate loading={null} persistor={persistor}>
            {() => (
              <ThemeProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <CssBaseline />
                  <Toaster />
                  <Component {...pageProps} />
                </LocalizationProvider>
              </ThemeProvider>
            )}
          </PersistGate>
        </GlobalStore>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
