import type { CSSProperties } from 'react';

function JSXAttributes() {
  // style 은 문자열이 아니라 "객체"
  // - CSS 속성 이름은 camelCase (background-color → backgroundColor)
  // - 숫자 값은 자동으로 px 단위가 붙음 (단, lineHeight 처럼 단위 없는 속성은 숫자 그대로)
  const boxStyle: CSSProperties = {
    width: 200, // '200px'
    padding: 8, // '8px'
    borderRadius: 4,
    backgroundColor: '#d9e6fc',
    lineHeight: 1.5, // '1.5' (px 아님)
  };

  return (
    <>
      <dt>HTML vs JSX 속성(attribute) 차이</dt>

      {/* ① JavaScript 예약어와 겹치는 속성 */}
      <dd>
        <p>
          ① JavaScript 예약어와 겹치는 속성은 이름이 바뀝니다. (class →
          className, for → htmlFor)
        </p>
        {/* HTML: <label for="jsx-name" class="status">이름</label> */}
        <label htmlFor="jsx-name" className="status">
          이름
        </label>{' '}
        <input id="jsx-name" type="text" placeholder="이름 입력" />
      </dd>

      {/* ② 여러 단어로 된 속성은 camelCase */}
      <dd>
        <p>
          ② 여러 단어로 된 속성은 camelCase 로 작성합니다. (tabindex → tabIndex,
          maxlength → maxLength, readonly → readOnly, stroke-width →
          strokeWidth)
        </p>
        {/* HTML: <input tabindex="0" maxlength="10" readonly value="읽기 전용"> */}
        <input type="text" tabIndex={0} maxLength={10} readOnly value="읽기 전용" />{' '}
        {/* HTML: <circle stroke-width="2" /> */}
        <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx={12} cy={12} r={10} fill="none" stroke="currentColor" strokeWidth={2} />
        </svg>
      </dd>

      {/* ③ 예외: aria-*, data-* 는 HTML 과 똑같이 kebab-case */}
      <dd>
        <p>③ 예외로 aria-*, data-* 속성은 HTML 과 똑같이 kebab-case 를 그대로 씁니다.</p>
        <span role="status" aria-live="polite" data-state="success" className="status">
          ✅ 로딩 성공!
        </span>
      </dd>

      {/* ④ style 객체 */}
      <dd>
        <p>④ style 속성에는 문자열이 아닌 객체를 전달합니다. (그래서 중괄호가 두 겹)</p>
        {/* HTML: <div style="width: 200px; padding: 8px; background-color: #d9e6fc;"> */}
        <div style={boxStyle}>변수에 담은 스타일 객체</div>
        <p style={{ color: 'crimson', fontWeight: 600 }}>인라인으로 바로 작성한 스타일 객체</p>
      </dd>

      {/* ⑤ 빈 요소는 반드시 닫기 */}
      <dd>
        <p>⑤ 내용이 없는 요소(빈 요소)도 반드시 닫아야 합니다. (&lt;br&gt; → &lt;br /&gt;)</p>
        {/* HTML 에서는 <img>, <br>, <input> 처럼 닫지 않아도 되지만 JSX 에서는 에러 */}
        <img src="/vite.svg" alt="Vite" height={24} />
        <br />
        <input type="text" placeholder="닫는 슬래시 필수" />
      </dd>

      {/* ⑥ boolean 속성 */}
      <dd>
        <p>
          ⑥ boolean 속성은 값을 생략하면 true 이고, false 를 전달하면 속성 자체가
          빠집니다.
        </p>
        {/* disabled 는 disabled={true} 와 같음 */}
        <button type="button" disabled>
          disabled
        </button>{' '}
        <button type="button" disabled={false}>
          disabled=&#123;false&#125;
        </button>
        <p hidden={false}>hidden=&#123;false&#125; 이므로 보이는 문단</p>
        <p hidden={true}>hidden=&#123;true&#125; 이므로 감춰진 문단</p>
      </dd>

      {/* ⑦ 주석과 공백 */}
      <dd>
        <p>⑦ JSX 안의 주석은 &#123;/* */&#125; 로, 줄바꿈 사이 공백은 &#123;' '&#125; 로 직접 넣습니다.</p>
        {/* 줄이 바뀌면 사이의 공백(줄바꿈)이 사라짐 → "ReactVite" */}
        <p>
          <strong>React</strong>
          <em>Vite</em>
        </p>
        {/* {' '} 로 공백을 명시 → "React Vite" */}
        <p>
          <strong>React</strong>{' '}
          <em>Vite</em>
        </p>
      </dd>
    </>
  );
}

export default JSXAttributes;
