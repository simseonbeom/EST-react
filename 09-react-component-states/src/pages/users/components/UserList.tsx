import type { UserType } from "../types/user"
import UserItem from "./UserItem"


interface Props {
  users: UserType[]
}



function UserList({users}:Props) {
  
  
  return (
    <ul className="UserList">
      {
        users.map((user,index)=>(
          <UserItem key={user.id} user={user} index={index} />
        ))
      }

    </ul>
  )
}
export default UserList