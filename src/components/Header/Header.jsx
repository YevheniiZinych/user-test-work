import sprite from "../../img/sprite.svg";
import { Wrapper, LogoWrap, BtnWrap, UserBtn, SignBtn } from "./Header.styled";
export const Header = () => {
  return (
    <header>
      <Wrapper>
        <LogoWrap>
          <svg width="38px" height="26px">
            <use href={sprite + "#logo"}></use>
          </svg>
          <svg width="64px" height="11px">
            <use href={sprite + "#logo-name"}></use>
          </svg>
        </LogoWrap>
        <BtnWrap>
          <ul>
            <li>
              <UserBtn href="#" title="Users">
                Users
              </UserBtn>
            </li>
            <li>
              <SignBtn>Sign up</SignBtn>
            </li>
          </ul>
        </BtnWrap>
      </Wrapper>
    </header>
  );
};
