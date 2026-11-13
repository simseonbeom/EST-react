import type { CSSProperties } from "react";
import type { UserType } from "../types/user";

interface Props {
  id:number;
  user:UserType;
  index:number;
}

function UserItem({id,user,index}:Props) {

  const {name, email, city} = user
  const style = { '--i': index, '--hue': (user.id * 47) % 360 } as CSSProperties

  return (
    <li key={id} style={style}>
      <span className="avatar-initial">{name}</span>
      <span className="info">
        <strong>{name}</strong>
        <a href="">{email}</a>
      </span>
      <span className="city">{city}</span>
    </li>
  )
}
export default UserItem