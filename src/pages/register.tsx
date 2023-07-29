import { NextPage } from 'next';
import SignIn from 'template/SignIn';
import withAuthToken from 'components/Auth/withAuth';

const Cadastro: NextPage = () => {
    return <SignIn />;
};
export default withAuthToken(Cadastro);
