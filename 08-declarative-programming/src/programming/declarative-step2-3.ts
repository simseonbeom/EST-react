// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍 STEP 2-3. 렌더 함수 작성 (상태 → UI)
// --------------------------------------------------------------------------
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [x] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [ ] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;

const data = {
  checked: false,
};

/*
render는 "상태를 보고 UI를 그리는 함수"입니다.
상태가 같으면 언제 몇 번을 호출해도 같은 화면이 나옵니다.
*/
const render = () => {
  const { checked } = data;

  checkbox.checked = checked;
  if (checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태';
  }
};

// 최초 렌더링
render();

/*
브라우저 콘솔에서 테스트해 보세요.
  data.checked = true
  render()           → 데이터만 바꾸고 render를 부르면 UI가 따라옵니다.

그런데... 데이터를 바꿀 때마다 render()를 직접 부르는 건 귀찮지 않나요?
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).data = data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).render = render;
