import styled from "styled-components";
import mobImg from "../../img/back-mob.jpg";

export const Container = styled.div`
  width: 360px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid red;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
  }
`;

export const HeroSection = styled.section`
  margin-bottom: 140px;
`;

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 500px;

  background-image: url(${mobImg});
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  background-position: center;

  & h1 {
    width: 328px;
    height: auto;
    text-align: center;

    color: #ffffff;

    font-size: 40px;
    line-height: 40px;
    font-weight: 400;

    margin-top: 40px;
    margin-bottom: 21px;
  }

  & p {
    width: 328px;
    height: auto;
    text-align: center;

    margin-bottom: 32px;

    color: #ffffff;
  }

  & button {
    width: 100px;
    height: 34px;
    padding: 4px 22px;

    border-radius: 80px;
    border: none;

    background-color: ${({ theme }) => theme.color.primary};

    line-height: 26px;
    font-size: 16px;
  }
`;
