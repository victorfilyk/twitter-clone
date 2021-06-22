import type { AppProps } from "next/app"
import React from "react"
import GlobalStyles from "../styles/global.styles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
