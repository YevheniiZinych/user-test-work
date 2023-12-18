import styled from "styled-components";

export const UserContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const TitleContainer = styled.div`
  width: 321px;
  height: auto;

  text-align: center;

  margin-bottom: 50px;
`;

export const UserTitle = styled.h2`
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
`;

export const UserList = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadMore = styled.button`
  width: 125px;
  height: 34px;
  padding: 4px 19px;
  margin-top: 50px;

  border-radius: 80px;
  border: none;

  background-color: ${({ theme }) => theme.color.primary};

  line-height: 26px;
  font-size: 16px;
  font-weight: 400;
`;
