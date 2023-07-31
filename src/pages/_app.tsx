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
                        <link
                            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@400;500;600&display=swap"
                            rel="stylesheet"
                        />
                        <link rel="icon" href="/assets/Logo.svg" />
                        <script
                            async
                            src="https://www.googletagmanager.com/gtag/js?id=G-QFMW1WX907"
                        />
                    </Head>
                    <Component {...pageProps} />
                </AuthProvider>
            </AppProvider>
        </>
    );
}

export default MyApp;
