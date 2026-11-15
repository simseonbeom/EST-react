// --------------------------------------------------------------------------
// 🧩 연습 2. 신호등 (난이도 ⭐⭐)
// --------------------------------------------------------------------------
// - [ ] 신호등이 가질 수 있는 "시각적 상태"를 타입으로 정의합니다.
// - [ ] light 상태를 선언합니다. (처음은 'red')
// - [ ] "다음 신호" 버튼을 누르면 red → green → yellow → red 순서로 바뀝니다.
// - [ ] 현재 신호만 밝게(opacity: 1), 나머지는 흐리게(opacity: 0.2) 보여 줍니다.
// - [ ] 신호에 맞는 안내 문구를 보여 줍니다.
//       red: "멈추세요 ✋" / yellow: "조심하세요 ⚠️" / green: "건너세요 🚶"
// --------------------------------------------------------------------------

/*
명령형이라면 이렇게 했을 겁니다.

  redEl.style.opacity = '0.2';
  greenEl.style.opacity = '1';
  messageEl.textContent = '건너세요 🚶';

요소 3개 + 문구 1개를 매번 직접 고쳐야 합니다. 하나라도 빠뜨리면 버그!
선언형에서는 light 상태 하나만 바꾸면 나머지는 JSX가 알아서 그립니다.

💡 힌트: "다음 신호"와 "안내 문구"는 객체(Record)로 미리 정리해 두면 if 문이 필요 없습니다.
*/

// import { useState } from 'react';

// TODO: Light 타입을 정의하세요. ('red' | 'yellow' | 'green')

const lights = ['red', 'yellow', 'green'] as const;

export default function TrafficLight() {
  // TODO: light 상태를 선언하세요.

  // TODO: 다음 신호로 바꾸는 함수를 작성하세요.

  return (
    <article style={{ padding: 20 }}>
      <h2>연습 2. 신호등</h2>
      <div style={{ display: 'flex', gap: 8, marginBlockEnd: 12 }}>
        {lights.map((color) => (
          <span
            key={color}
            style={{
              inlineSize: 48,
              blockSize: 48,
              borderRadius: '50%',
              backgroundColor: color,
              // TODO: 현재 신호면 1, 아니면 0.2
              opacity: 1,
            }}
          />
        ))}
      </div>
      {/* TODO: 현재 신호에 맞는 문구를 보여 주세요. */}
      <p>멈추세요 ✋</p>
      <button type="button">다음 신호</button>
    </article>
  );
}
