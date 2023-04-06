import { NextPage } from 'next';
import HomePage from 'pages/HomePage';
import Transition from 'pages/Transition';
import { useEffect } from 'react';

const Home: NextPage = () => {
    useEffect(() => <Transition />, []);
    return <HomePage />;
};
export default Home;
