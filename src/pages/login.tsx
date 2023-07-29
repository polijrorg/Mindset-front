import { NextPage } from 'next';
import Login from 'template/Login';
import withAuthToken from 'components/Auth/withAuth';

const LoginHome: NextPage = () => {
    return <Login />;
};
export default withAuthToken(LoginHome);
