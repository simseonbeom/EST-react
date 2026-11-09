class VirtualDomRoot {
  #rootElement;

  constructor(rootElement) {
    this.#rootElement = rootElement;
  }

  #parseVNode(vNode) {
    // [수정] 숫자 자식(예: createElement('p', null, 1))은 createElement(undefined)로 에러 → 문자열로 변환
    if (typeof vNode === 'string' || typeof vNode === 'number') return String(vNode);

    const { type, props } = vNode;

    const element = document.createElement(type);
    // [수정] 원래 `delete props.children` 으로 가상 요소 객체를 직접 변경(mutation)
    //        → 같은 vNode를 두 번 render하면 children이 사라져 에러. 구조 분해로 복사해서 사용
    const { children = [], ...attributes } = props;

    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        // [수정] classList.add('a b')는 공백이 있으면 에러 → className 속성에 그대로 대입
        element.className = value;
      } else {
        element.setAttribute(key, value);
      }
    });

    children.forEach((child) => {
      element.append(this.#parseVNode(child));
    });

    return element;
  }

  render(vNode) {
    const parsedElements = this.#parseVNode(vNode); // 가상 -> 실제 DOM 생성
    // 참고: 실제 React의 root.render()는 컨테이너 내용을 "교체"하지만,
    //       이 실습에서는 실제 DOM 결과와 나란히 비교하려고 append(추가)로 둠
    this.#rootElement.append(parsedElements);
  }

  // [수정] 메서드 이름 오타 umount → unmount (React의 root.unmount()와 동일한 이름)
  unmount() {
    // [최신화] Array.from(children).forEach(remove) → replaceChildren()으로 한 번에 비움
    this.#rootElement.replaceChildren();
  }
}

export default VirtualDomRoot;
