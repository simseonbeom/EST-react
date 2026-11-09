// React API 유사
// React.createElement(type, props, ...children)

export const VIRTUAL_ELEMENT_TYPE = Symbol('virtual.element');

function createElement(type, props, ...children) {
  // [수정] key가 props 안에도 남아 실제 DOM에 key="..." 속성으로 찍힘 → React처럼 key는 props에서 분리
  // [수정] props.children이 배열이 아니면(예: 'hi') 전개 연산자로 글자 단위로 쪼개짐 → [].concat()으로 배열화
  // [수정] null / undefined / false 자식은 React처럼 무시하도록 걸러냄 (조건부 렌더링 대비)
  const { key = null, children: propsChildren = [], ...restProps } = props ?? {};

  // Creating a Virtual Element
  return {
    $$typeof: VIRTUAL_ELEMENT_TYPE,
    type,
    key,
    props: {
      ...restProps,
      children: [...[].concat(propsChildren), ...children].filter(
        (child) => child !== null && child !== undefined && child !== false
      ),
    },
  };
}

export default createElement;
