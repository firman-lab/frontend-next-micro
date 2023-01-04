import '../styles/globals.css';
import '../styles/pagination.scss';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import redux from 'redux';
import { ThemeProvider } from 'next-themes';

// const store = redux.configurrStore;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                {/* <Provider store={store}> */}
                <ThemeProvider attribute='class' enableSystem>
                    <Component {...pageProps} />
                </ThemeProvider>
                {/* </Provider> */}
            </RecoilRoot>
        </>
    );
}

export default MyApp;
