import styled from "styled-components";

export const UserView = styled.li`
  width: 328px;
  padding: 20px;

  border-radius: 10px;

  background-color: #ffffff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 344px;

    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 282px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 288px;

  overflow: hidden;
  text-overflow: ellipsis;

  gap: 20px;

  & img {
    border-radius: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 304px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 242px;
  }
`;

export const InnerText = styled.div`
  text-align: center;
`;
