/* eslint-disable react/no-unescaped-entities */
import { AuthProvider } from 'hooks/useAuth';
import AppProvider from 'hooks';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <AppProvider>
                <AuthProvider>
                    <GlobalStyles />
                    <Head>
                        <style>
                            @import
                            url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400&display=swap');{' '}
                        </style>
                    </Head>
                    <Component {...pageProps} />
                </AuthProvider>
            </AppProvider>
        </>
    );
}

export default MyApp;
