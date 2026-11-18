
import { useEffect, useState } from "react";

function UserList() {

  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("데이터 가져오기 실패:", err);
        setLoading(false);
      });
      console.log('데이터 가져오기');
      
    }, []);

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