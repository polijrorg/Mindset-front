import { NextPage } from 'next';
import HomePage from 'pages/HomePage';
import Transition from 'pages/Transition';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    function Loading() {
        const router = useRouter();
        const [loading, setLoading] = useState(false);
        useEffect(() => {
            const handleStart = (url: string) =>
                url !== router.asPath && setLoading(true);
            const handleComplete = (url: string) =>
                url === router.asPath &&
                setTimeout(() => {
                    setLoading(false);
                    5000;
                });

            router.events.on('routeChangeStart', handleStart);
            router.events.on('routeChangeComplete', handleComplete);
            router.events.on('routeChangeError', handleComplete);

            return () => {
                router.events.off('routeChangeStart', handleStart);
                router.events.off('routeChangeComplete', handleComplete);
                router.events.off('routeChangeError', handleComplete);
            };
        });
        return (
            loading && (
                <div>
                    <Transition />
                </div>
            )
        );
    }
    return (
        <>
            <div className="preloader">{Loading}</div>
            <HomePage />{' '}
        </>
    );
};
export default Home;
