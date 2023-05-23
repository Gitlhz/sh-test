import '@/styles/globals.css'
// import Header from "@/components/header/header"
import Header from "@/components/headerBar/header"
import Footer from "@/components/footer/footer"
import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '@/theme';
import createEmotionCache from '@/createEmotionCache';
import {Head} from "next/document";

export const GlobalContext = createContext({});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function App(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const [loggedIn, setLoggedIn] = useState(0);

  return <>

    <CacheProvider value={emotionCache}>
      <GlobalContext.Provider value={{loggedIn, setLoggedIn}}>
        {/*<Head>*/}
        {/*  <title>Sperm Bank</title>*/}
        {/*</Head>*/}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </ThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>

  </>
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
