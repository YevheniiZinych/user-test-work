import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 13px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    padding: 0 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    padding: 0 60px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
`;

export const BtnWrap = styled.div`
  & ul {
    display: flex;
    gap: 10px;

    margin-top: 17px;
  }
`;

export const UserBtn = styled.a`
  display: inline-block;
  cursor: pointer;

  width: 95px;
  height: 34px;
  padding: 4px 29px;

  border-radius: 80px;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const SignBtn = styled(UserBtn)`
  border: none;

  padding: 4px 20px;
`;
