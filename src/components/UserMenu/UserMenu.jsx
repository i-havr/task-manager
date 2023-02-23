import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import { UserMenuStyled, UserNameStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuStyled>
      <UserNameStyled>Welcome, {user.name}</UserNameStyled>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </UserMenuStyled>
  );
};
