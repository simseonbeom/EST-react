import { useState } from "react";

function Form() {
  const [text, setText] = useState('');
  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        aria-label="제어 입력"
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
      <p>입력 값 : {text}</p>
      <hr />
      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        aria-label="비제어 입력"
        defaultValue="처음 한번만 반영됨"
        onChange={(e)=> console.log(e.target.value)}
      />
       <p>입력 값 : {text}</p>
    </div>
  )
}
export default Form

/*
| 상황                 | 추천 방식                             |
| ------------------ | --------------------------------- |
| 폼 상태를 React로 통제할 때 | `value` + `onChange` (controlled) |
| 간단한 초기 입력값만 필요할 때  | `defaultValue` (uncontrolled)     |
| 외부 상태와 무관한 입력창     | `defaultValue` 가능                 |
| 폼 리셋, 검증, 자동완성 필요  | `value` 권장 (제어가 쉬움)               |
 */