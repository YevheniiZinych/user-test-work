import { Container, HeroWrap, HeroSection } from "./MainPage.styled";
import { Header } from "../../components/Header/Header";
export const MainPage = () => {
  return (
    <Container>
      <Header />
      <main>
        <HeroSection>
          <HeroWrap>
            <h1>Test assignment for front-end developer </h1>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <button type="button">Sign up</button>
          </HeroWrap>
        </HeroSection>
        <section></section>
      </main>
    </Container>
  );
};
