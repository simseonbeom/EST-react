import { useState, type CSSProperties } from "react";
import userData from "@/data/users.json";

import "./UserPage.css";
import UserList from "./components/UserList";
import UserSearchBox from "./components/UserSearchBox";


/* UserList, UserDetail, UserSearchBox, UserList, UserListCount, InstantSearch */

function UserPage() {
  const [users] = useState(userData);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (userInput:string) => setSearchTerm(userInput)



  // [파생된 상태] -------------------------------------------------
  // const searchedUsersList = users.filter((user)=>
  //   user.name.includes(searchTerm) ||
  //   user.email.includes(searchTerm) ||
  //   user.city.includes(searchTerm) 
  // )

    // some	하나라도 만족하면 true (OR)
    // every	모두 만족해야 true (AND)
    const searchedUsersList = users.filter((user) =>
    [user.name, user.username, user.email, user.city]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // [마크업 (JSX)] -----------------------------------------------
  return (
    <div className="UserPage">
      <header className="UserPage__header">
        <h1>사용자 목록</h1>
        <div className="formControl InstantSearch">
          <label htmlFor="a-10">
            <input type="checkbox" id="a-10" />
            인스턴트 서치
          </label>
        </div>
      </header>

      <UserSearchBox onSearch={handleSearch} searchTerm={searchTerm}/>

      <UserList users={searchedUsersList}></UserList>

      <div className="UserListCount">
        <span className="text">
          <span>검색 결과</span>
          <span data-testid="user-list-count">
            10/ <b>20</b>
          </span>
        </span>
        <div className="bar">
          <span style={{ "--ratio": 0.5 } as CSSProperties}></span>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
