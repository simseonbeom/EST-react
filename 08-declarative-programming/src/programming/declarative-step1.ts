import createState from "@/lib/createState";

const data = {
  checked:false,
}


/* 
state가 변경될 때 호출될 "렌더 함수"입니다.
React에서 컴포넌트가 리렌더링되는 효과를 직접 흉내내는 함수라고 볼 수 있어요
*/
const render = () => {
  console.log('re-render');
  console.log('[checked 업데이트 상태]: ',state.checked);
}




/* 
state: 현재 상태 (checked: false)
setState: 상태를 업데이트하고 render()를 실행시켜주는 함수
이 구조는 React의 const [count, setCount] = useState(0)와 유사합니다.
*/
const [state,setState] = createState(data,render);


console.log('[checked 초기 상태]: ', state.checked);

function update(){
  const nextCheckedValue = !state.checked;
  setState('checked',nextCheckedValue);
}


update()








