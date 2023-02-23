import { useAuth } from 'hooks';
import { NavigationStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/tasks">Tasks</NavLinkStyled>}
    </NavigationStyled>
  );
};
