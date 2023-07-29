import LandingPage from 'template/LandingPage';
import withAuthToken from 'components/Auth/withAuth';
import { NextPage } from 'next';

const Landing: NextPage = () => {
    return <LandingPage />;
};

export default withAuthToken(Landing);
