import { useRef } from "react";
import Child from "./Child";

function Parent() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // const input = document.querySelector('input');
    // input?.focus();

    if(inputRef.current){
      inputRef.current.focus()
    }
  }

  return (
    <>
      {/* <input type="text" placeholder="닉네임을 입력하세요" /> */}
      {/* <input ref={inputRef} type="text" placeholder="아이디를 입력하세요" /> */}
      <Child ref={inputRef} placeholder="아이디를 입력하세요"></Child>
      <button type="button" onClick={handleFocus}>인풋에 포커스</button>
    </>
  )
}
export default Parent