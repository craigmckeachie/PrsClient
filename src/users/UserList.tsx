import { useState, useEffect } from "react";
import { IUser } from "./IUser";
import { userAPI } from "./UserAPI";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await userAPI.list();
      setUsers(data);
    }
    loadUsers();
  }, []);
  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default UserList;
