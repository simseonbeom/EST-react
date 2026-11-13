// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-2. 상태 선언 (WHAT)
// --------------------------------------------------------------------------
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [ ] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [ ] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

/*
명령형에서는 "지금 체크됐나?"를 알려면 DOM(checkbox.checked)을 봐야 했습니다.
선언형에서는 화면이 아니라 "데이터"를 기준으로 생각합니다.

화면이 바뀌는 데 필요한 정보는 딱 하나 → 체크됐는가?
*/

// 무엇(WHAT)을 상태로 선언할 것인가?
const data = {
  checked: false,
};

console.log('[상태]:', data, checkbox, button);
