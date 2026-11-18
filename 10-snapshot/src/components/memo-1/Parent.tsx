import { useCallback, useState } from "react";
import Child from "./Child";


// 부모가 렌더링되면 자식도 기본적으로 다시 렌더링됩니다.

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback( () => {
    console.log('clicked!');
  
  },[])

  return (
     <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child label="나는 고정된 자식" onClick={handleClick} />
    </div>
  )
}
export default Parent