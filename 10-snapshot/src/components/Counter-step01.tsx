import { useCallback, useState } from "react"

function slowInit() {
  console.log('초기값 계산 중...');
  let sum = 0;
  for (let i = 0; i < 1_000; i++) {
    sum += i;
  }
  return sum;
}



function Counter() {
  const [number, setNumber] = useState(slowInit);

  const handleClick = useCallback(() => {
    setNumber(n => n + 1);

  },[])

  return (
    <>
      <button type="button" onClick={() => setNumber(number - 1)}>-</button>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}>+</button>
    </>
  )
}
export default Counter