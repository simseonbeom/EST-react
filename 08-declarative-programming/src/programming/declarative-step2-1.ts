// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-1. 대상(DOM 요소) 찾기
// --------------------------------------------------------------------------
// - [ ] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [ ] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [ ] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

/*
여기까지는 명령형 프로그래밍(imperative-step1.ts)과 똑같습니다.
화면에서 조작할 대상을 먼저 찾아 둡니다.
*/

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

console.log(checkbox, button);
