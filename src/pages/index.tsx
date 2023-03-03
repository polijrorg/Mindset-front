import { NextPage } from 'next';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Input from 'components/InputLogin';
import Card from 'components/Card';

const Home: NextPage = () => {
    return (
        /* <Card
            image="/assets/imageTest.png"
            textoPrincipal="Course"
            subTexto="author: Marco"
        /> */
        <Input Text="Email" image="/assets/Mailemail.png" />
        // <Footer />
        // <Header logo="/assets/LogoWithWhitLetters.svg"  />
    );
};

export default Home;
