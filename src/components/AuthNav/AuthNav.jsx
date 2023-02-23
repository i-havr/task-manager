import { AuthNavStyled, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </AuthNavStyled>
  );
};
