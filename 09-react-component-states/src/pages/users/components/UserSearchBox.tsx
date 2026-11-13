import { useId } from "react";


/* 
1. handleSearch 이벤트 만들기 
2. form onSubmit이벤트에 바인딩하기


*/

function UserSearchBox({onSearch, searchTerm}) {
  
  const id = useId();

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById(id) as HTMLInputElement;
    const button = e.currentTarget.querySelector('[type="submit"]') as HTMLButtonElement;
    const value = input.value.trim();

    if(value.length > 0){
      // 
      onSearch(value);
      input.value = '';
      button.focus();
    }else{
      alert('검색어를 입력해주세요.');
      input.value = '';
      input.focus();
    }
    
    
  }
  

  return (
    <form className="UserSearchBox" onSubmit={handleSearch}>
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input 
          id={id} 
          type="search" 
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
        />
      </div>
      <button type="submit">찾기</button>
      <button type="reset">목록 초기화</button>
    </form>
  );
}
export default UserSearchBox;
