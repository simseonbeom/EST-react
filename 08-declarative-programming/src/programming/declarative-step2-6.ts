// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-6. 이벤트 연결 (완성)
// --------------------------------------------------------------------------
// - [x] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요 (createState 함수 활용)
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [x] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [x] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

import createState from '../lib/createState';

// 1. 대상 찾기
const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

// 2. 상태 선언 (WHAT)
const data = {
  checked: false,
};

// 3. 렌더 함수 (상태 → UI)
const render = () => {
  const { checked } = state;

  checkbox.checked = checked;
  if (checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태';
  }
};

// 4. 상태와 렌더 함수 연결
const [state, setState] = createState(data, render);

declare global {
  var update: (value: boolean) => void;
}

// 5. 상태 변경 함수
const update = (globalThis.update = (value: boolean): void => {
  setState('checked', value);
});

// 6. 이벤트 연결
/*
imperative-step1.ts의 handleChange와 비교해 보세요.
- 명령형: 이벤트 핸들러가 버튼을 켜고, 글자를 바꾸는 "방법(HOW)"을 직접 지시
- 선언형: 이벤트 핸들러는 "상태 변경 요청" 한 줄뿐
*/
checkbox.addEventListener('change', (e: Event) => {
  const { checked: nextCheckedValue } = e.target as HTMLInputElement;
  update(nextCheckedValue);
});

// 최초 렌더링
render();

/*
React와 비교
  data                     → useState의 초기값
  render                   → 컴포넌트 함수
  createState              → useState
  setState('checked', v)   → setChecked(v)
  update(true)             → 상태만 바꾸면 UI는 React가 갱신
*/
