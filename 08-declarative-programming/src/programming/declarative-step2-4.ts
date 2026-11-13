// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-4. createState로 연결 (자동 다시 렌더링)
// --------------------------------------------------------------------------
// - [x] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요 (createState 함수 활용)
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [x] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [ ] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

import createState from '../lib/createState';

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

const data = {
  checked: false,
};

const render = () => {
  // data 대신 state를 읽습니다.
  // state는 아래에서 선언되지만, render가 "실제로 호출되는 시점"에는 이미 만들어져 있어서 괜찮습니다.
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

/*
createState(data, render)
- state: 현재 상태 (읽기 전용)
- setState: 상태를 바꾸고 render()를 "대신" 호출해 주는 함수

React: const [checked, setChecked] = useState(false);
*/
const [state, setState] = createState(data, render);

// 최초 렌더링
render();

/*
브라우저 콘솔에서 테스트해 보세요.
  state.checked = true             → ⚠️ 경고! 상태를 직접 수정할 수 없습니다.
  setState('checked', true)        → render()를 부르지 않았는데 UI가 바뀝니다.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).state = state;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).setState = setState;
