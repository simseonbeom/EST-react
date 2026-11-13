// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-5. update 함수 만들기
// --------------------------------------------------------------------------
// - [x] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요 (createState 함수 활용)
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [x] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [x] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

import createState from '../lib/createState';

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

const data = {
  checked: false,
};

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

const [state, setState] = createState(data, render);

declare global {
  var update: (value: boolean) => void;
}

/*
상태를 바꾸는 일만 하는 함수입니다. UI를 "어떻게" 바꿀지는 전혀 모릅니다.
globalThis.update로 등록한 이유: 브라우저 콘솔에서 update(true) 테스트할 수 있도록 하기 위함
*/
const update = (globalThis.update = (value: boolean): void => {
  setState('checked', value);
});

// 최초 렌더링
render();

/*
브라우저 콘솔에서 테스트해 보세요.
  update(true)
  update(false)

체크박스를 클릭하지 않았는데 체크박스와 버튼이 "함께" 바뀝니다.
→ 우리는 상태만 바꿨고, 화면은 render가 알아서 그립니다.
*/
console.log(update);
