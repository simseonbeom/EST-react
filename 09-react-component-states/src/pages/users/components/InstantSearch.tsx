import { useId } from "react";



interface Props {
  isInstantSearch: boolean;
    onToggle: () => void;
}



function InstantSearch({isInstantSearch,onToggle}:Props) {

  const id = useId()
  
  return (
    <header className="UserPage__header">
        <h1>사용자 목록</h1>
        <div className="formControl InstantSearch">
          <label htmlFor={id}>
            <input type="checkbox" id={id} checked={isInstantSearch} onChange={onToggle}/>
            인스턴트 서치
          </label>
        </div>
      </header>
  )
}
export default InstantSearch