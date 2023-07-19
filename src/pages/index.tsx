import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import PublicHome from 'template/Home';
import HomePage from 'template/HomePage';

const Home: NextPage = () => {
    const [token, setToken] = useState<string | null>();
    const [isProducer, setProducer] = useState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setToken(localStorage.getItem('mindset:token'));
        if (localStorage.getItem('mindset:ClientType') === 'producer') {
            setProducer(true);
        }
    });
    return token ? <HomePage clientType={isProducer} /> : <PublicHome />;
    /* return <HomePage clientType={isProducer} />; */
};
export default Home;
