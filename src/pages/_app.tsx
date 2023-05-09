import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeWrapper from "@src/theme";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeWrapper>
    <Component {...pageProps} />
  </ThemeWrapper>
}
