
import { useUsers } from "@/hook/useUsers";
import { useEffect, useState } from "react";

function UserList() {


  const [count, setCount] = useState(0);
    const {users, loading, error} = useUsers()

  if (loading) return <p>로딩 중...</p>;


  return (
    <>
      <ul>
        {
        users && users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
      <button type="button" onClick={()=> setCount(count + 1)}>COUNT</button>
    </>
  )
}
export default UserList;