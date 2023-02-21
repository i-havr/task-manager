import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <AppBarStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarStyled>
  );
};
