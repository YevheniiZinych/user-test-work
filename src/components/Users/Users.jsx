import { useEffect, useState } from "react";
import { getUsers } from "../../api/user";
import { asyncWrapper } from "../../helpers/asyncWrapper";
import { UserItem } from "../UserItem/UserItem";
import {
  UserContainer,
  UserTitle,
  TitleContainer,
  UserList,
  LoadMore,
} from "./Users.styled";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [countUsers, setCountUsers] = useState(5);
  let buttonBehavior = "";
  let start = 0;

  const showUser = users.slice(start, countUsers);

  useEffect(() => {
    (async () => {
      const result = await asyncWrapper(getUsers);
      setUsers(result);
    })();
  }, []);

  if (users.length <= countUsers) {
    buttonBehavior = true;
  } else {
    buttonBehavior = false;
  }

  const showMoreUsers = () => {
    setCountUsers((prev) => prev + 6);
  };

  return (
    <UserContainer>
      <div>
        <TitleContainer>
          <UserTitle>Working with GET request</UserTitle>
        </TitleContainer>
        <UserList>
          <UserItem users={showUser} />
        </UserList>
      </div>
      <div>
        <LoadMore
          type="button"
          onClick={showMoreUsers}
          disabled={buttonBehavior}
        >
          Show more
        </LoadMore>
      </div>
    </UserContainer>
  );
};
