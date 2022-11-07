import "../styles/globals.css";
import '../styles/pagination.scss';

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider attribute="class" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
