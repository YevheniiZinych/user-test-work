import { UserView, Wrapper, InnerText } from "./UserItem.styled";

export const UserItem = ({ users }) => {
  return (
    <>
      {[...users]?.length > 0 &&
        [...users].map(({ id, name, email, phone, photo, position }) => {
          return (
            <UserView key={id}>
              <Wrapper>
                <img src={photo} alt="Photo of the employee" width={70} />
                <p>{name}</p>
                <InnerText>
                  <p>{position}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                </InnerText>
              </Wrapper>
            </UserView>
          );
        })}
    </>
  );
};
