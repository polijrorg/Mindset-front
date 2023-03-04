import { NextPage } from 'next';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Input from 'components/InputLogin';
import Card from 'components/Card';
import CardVideo from 'components/CardVideo';

const Home: NextPage = () => {
    return (
        /* <Card
            image="/assets/imageTest.png"
            textoPrincipal="Course"
            subTexto="author: Marco"
        /> */
        // <Input Text="E-mail" image="/assets/Mailemail.png" />
        <CardVideo
            isWhite={false}
            title="Nome do vídeo"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            // image=""
        />
        // <Footer />
        // <Header logo="/assets/LogoWithWhitLetters.svg"  />
    );
};

export default Home;
