import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { LoginStyled } from './Login.styled';

export default function Login() {
  return (
    <HelmetProvider>
      <LoginStyled>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </LoginStyled>
    </HelmetProvider>
  );
}
