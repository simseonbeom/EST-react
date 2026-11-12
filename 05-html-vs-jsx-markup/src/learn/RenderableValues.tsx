interface Props {
  items: StatusMessageObject[];
}


// <output> 테두리 안이 실제로 렌더링된 결과입니다. (비어 있으면 아무것도 렌더링되지 않은 것)
function RenderableValues({ items }: Props) {
  return (
    <>
      <dt>JSX 가 렌더링하는 값 / 렌더링하지 않는 값</dt>

      {/* ① 문자열, 숫자 → 그대로 렌더링 */}
      <dd className="renderedValues">
        <p>① 문자열과 숫자는 그대로 화면에 렌더링됩니다. (0, NaN 도 숫자!)</p>
        <ul>
          <li>
            <code>{"{'React'}"}</code> → <output>{'React'}</output>
          </li>
          <li>
            <code>{'{19}'}</code> → <output>{19}</output>
          </li>
          <li>
            <code>{'{0}'}</code> → <output>{0}</output>
          </li>
          <li>
            <code>{'{NaN}'}</code> → <output>{NaN}</output>
          </li>
        </ul>
      </dd>

      {/* ② null, undefined, boolean, 빈 문자열 → 렌더링 안 됨 */}
      <dd className="renderedValues">
        <p>② null, undefined, true, false, 빈 문자열('')은 아무것도 렌더링하지 않습니다.</p>
        <ul>
          <li>
            <code>{'{null}'}</code> → <output>{null}</output>
          </li>
          <li>
            <code>{'{undefined}'}</code> → <output>{undefined}</output>
          </li>
          <li>
            <code>{'{true}'}</code> → <output>{true}</output>
          </li>
          <li>
            <code>{'{false}'}</code> → <output>{false}</output>
          </li>
          <li>
            <code>{"{''}"}</code> → <output>{''}</output>
          </li>
        </ul>
        <p>그래서 &&, 삼항 연산자의 결과로 false 나 null 을 반환하면 "아무것도 안 그리기"가 됩니다.</p>
      </dd>

      {/* ③ 배열 → 펼쳐서 렌더링 / 객체 → 에러 */}
      <dd className="renderedValues">
        <p>③ 배열은 요소를 이어 붙여 렌더링하지만, 객체는 렌더링할 수 없습니다.</p>
        <ul>
          <li>
            <code>{"{['A', 'B', 'C']}"}</code> → <output>{['A', 'B', 'C']}</output>
          </li>
          <li>
            {/* <output>{{ name: 'React' }}</output>
                → 에러: Objects are not valid as a React child */}
            <code>{"{{ name: 'React' }}"}</code> → ❌ 에러 (Objects are not valid as a React child)
          </li>
          <li>
            {/* 객체를 보여주고 싶다면 원하는 값을 꺼내거나 문자열로 변환 */}
            <code>{"{JSON.stringify({ name: 'React' })}"}</code> →{' '}
            <output>{JSON.stringify({ name: 'React' })}</output>
          </li>
        </ul>
      </dd>

      {/* ④ && 함정: 0 은 숫자라서 렌더링된다 */}
      <dd className="renderedValues">
        <p>
          ④ 주의! && 왼쪽이 숫자 0 이면 false 가 아니라 0 이 반환되어 화면에 0 이
          찍힙니다. (items 는 빈 배열)
        </p>
        <ul>
          <li>
            ❌ <code>{'{items.length && <ul>…</ul>}'}</code> →{' '}
            <output>
              {items.length && (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>{item.message}</li>
                  ))}
                </ul>
              )}
            </output>
          </li>
          <li>
            {/* 비교 연산으로 확실한 boolean 을 만들어 사용 */}
            ✅ <code>{'{items.length > 0 && <ul>…</ul>}'}</code> →{' '}
            <output>
              {items.length > 0 && (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>{item.message}</li>
                  ))}
                </ul>
              )}
            </output>
          </li>
          <li>
            {/* 비어 있을 때 보여줄 내용이 있다면 삼항 연산자 */}
            ✅ <code>{'{items.length > 0 ? <ul>…</ul> : <p>…</p>}'}</code> →{' '}
            <output>
              {items.length > 0 ? (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>{item.message}</li>
                  ))}
                </ul>
              ) : (
                '표시할 상태 메시지가 없습니다.'
              )}
            </output>
          </li>
        </ul>
      </dd>
    </>
  );
}

export default RenderableValues;
