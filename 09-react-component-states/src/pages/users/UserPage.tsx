import { useState, type CSSProperties } from "react";
import userData from "@/data/users.json";

import "./UserPage.css";
import UserList from "./components/UserList";
import UserSearchBox from "./components/UserSearchBox";
import UserListCount from "./components/UserListCount";
import InstantSearch from "./components/InstantSearch";


/* UserList, UserDetail, UserSearchBox, UserList, UserListCount, InstantSearch */



function UserPage() {

  // 상태 선언
  const [users] = useState(userData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isInstantSearch, setIsInstantSearch] = useState(false);

  // 상태 업데이트
  // 컴포넌트 상태 업데이트 함수를 실행하는 기능(함수)
  const handleSearch = (userInput:string) => setSearchTerm(userInput)
  const handleReset = () => setSearchTerm('')
  const handleToggleInstantSearch = () => setIsInstantSearch(!isInstantSearch)


  // [파생된 상태] -------------------------------------------------
  // const searchedUsersList = users.filter((user)=>
  //   user.name.includes(searchTerm) ||
  //   user.email.includes(searchTerm) ||
  //   user.city.includes(searchTerm) 
  // )


  // 파생된 성태 
    // some	하나라도 만족하면 true (OR)
    // every	모두 만족해야 true (AND)
    const searchedUsersList = users.filter((user) =>
    [user.name, user.username, user.email, user.city]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // [마크업 (JSX)] -----------------------------------------------
  return (
    <div className="UserPage">
      <InstantSearch isInstantSearch={isInstantSearch} onToggle={handleToggleInstantSearch} />

      <UserSearchBox onSearch={handleSearch} searchTerm={searchTerm} onReset={handleReset}/>

      <UserList users={searchedUsersList}></UserList>

      <UserListCount userCount={searchedUsersList.length} totalUserCount={users.length}/>
      
    </div>
  );
}
export default UserPage;
