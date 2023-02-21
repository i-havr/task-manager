import { useAuth } from 'hooks';
import { UserMenuStyled, UserNameStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <UserNameStyled>Welcome, {user.name}</UserNameStyled>
      <button type="button">Logout</button>
    </UserMenuStyled>
  );
};
