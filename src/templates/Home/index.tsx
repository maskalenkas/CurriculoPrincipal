import * as S from './styles';

export type HomeTemplateProps = {
  title?: string;
  description?: string;
};

// Recebendo as props do NEXT
const Home = ({ title, description }: HomeTemplateProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Home;
