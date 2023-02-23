import { useDispatch } from 'react-redux';
import { FormStyled, LabelStyled } from './RegisterForm.styled';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <input type="text" name="name" />
      </LabelStyled>
      <LabelStyled>
        Email
        <input type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <input type="password" name="password" />
      </LabelStyled>
      <button>Register</button>
    </FormStyled>
  );
};
