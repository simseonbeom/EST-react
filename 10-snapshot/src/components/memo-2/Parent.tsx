import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  // ❌ 렌더링마다 새로운 배열이 생성됨
 const fruits = useMemo(()=>['🍎', '🍌', '🍇'],[]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>+1</button>
      <Child items={fruits} />
    </div>
  );
}
export default Parent