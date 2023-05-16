import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import PublicHome from 'template/Home';
import HomePage from 'template/HomePage';

const Home: NextPage = () => {
    const [token, setToken] = useState<string | null>();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setToken(localStorage.getItem('mindset:token'));
    });
    return token ? <HomePage /> : <PublicHome />;
};
export default Home;
