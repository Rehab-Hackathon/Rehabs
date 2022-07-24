import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { StylesProvider } from "@mui/styles";
import { AppThemeProvider } from "src/providers";
import { ThemeProvider as NextThemeProvider } from "next-themes";
// import { Web3ReactProvider } from "@web3-react/core";

import { Layout } from "src/views/common/Layout";
import { GlobalStyles } from "src/styles/GlobalStyles";
import createEmotionCache from "src/utils/emotion/createEmotionCache";

// * Type imports
import type { FC } from "react";
import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/react";
// import { connectors } from "src/utils/connectors";
// import { getConnectorName } from "src/utils/getConnectorName";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.polygon], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon", // go to https://www.ankr.com/protocol/ to get a free RPC for your network if you're not using Polygon
        };
      },
    }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Proof of Rekts",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// if (typeof window !== 'undefined') {
//   ReactGA.initialize(process.env.NEXT_PUBLIC_GA)
//   ReactGA.pageview(window.location.pathname + window.location.search)
//   hotjar.initialize(parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID), 6)
// }

type CustomAppProps = AppProps & {
  emotionCache?: EmotionCache;
  fallback: { [key: string]: any };
};

const clientSideEmotionCache = createEmotionCache();

const CustomApp: FC<CustomAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>NextJS Skeleton</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyles />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <StylesProvider injectFirst>
            <NextThemeProvider
              forcedTheme="light"
              defaultTheme="light"
              themes={["light", "dark"]}
              enableSystem={true}
              enableColorScheme={false}
              attribute="class"
            >
              <AppThemeProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AppThemeProvider>
            </NextThemeProvider>
          </StylesProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </CacheProvider>
  );
};

export default CustomApp;
