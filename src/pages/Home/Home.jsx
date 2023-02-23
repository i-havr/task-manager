import { HomeStyled, TitleStyled } from './Home.styled';

export default function Home() {
  return (
    <HomeStyled>
      <TitleStyled>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </TitleStyled>
    </HomeStyled>
  );
}
