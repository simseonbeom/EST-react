



// 대상 찾기
const container = document.getElementById('imperative-programming')!;
const checkbox = container.querySelector(
  'input[type="checkbox"]'
) as HTMLInputElement; // 타입 단언(Type Assertion)
const button = container.querySelector('button') as HTMLButtonElement;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).checkbox = checkbox;

checkbox.addEventListener('change', handleChange);

// 이벤트 핸들러(기능) 작성(구현)
function handleChange(e: Event) {
  
  const { checked } = e.target as HTMLInputElement;
  if (checked) {
    // button.setAttribute('disabled', 'false');
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태';
  }
}
