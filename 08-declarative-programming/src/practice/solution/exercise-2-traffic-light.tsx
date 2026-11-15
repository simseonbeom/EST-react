// --------------------------------------------------------------------------
// ✅ 연습 2. 신호등 (정답)
// --------------------------------------------------------------------------
// - [x] 신호등이 가질 수 있는 "시각적 상태"를 타입으로 정의합니다.
// - [x] light 상태를 선언합니다. (처음은 'red')
// - [x] "다음 신호" 버튼을 누르면 red → green → yellow → red 순서로 바뀝니다.
// - [x] 현재 신호만 밝게(opacity: 1), 나머지는 흐리게(opacity: 0.2) 보여 줍니다.
// - [x] 신호에 맞는 안내 문구를 보여 줍니다.
// --------------------------------------------------------------------------

import { useState } from 'react';

type Light = 'red' | 'yellow' | 'green';

const lights: Light[] = ['red', 'yellow', 'green'];

// "어떻게 바꿀지(if/else)" 대신 "무엇인지(데이터)"를 선언해 둡니다.
const nextLight: Record<Light, Light> = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
};

const messages: Record<Light, string> = {
  red: '멈추세요 ✋',
  yellow: '조심하세요 ⚠️',
  green: '건너세요 🚶',
};

export default function TrafficLight() {
  const [light, setLight] = useState<Light>('red');

  const handleNext = () => {
    setLight(nextLight[light]);
  };

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
              opacity: color === light ? 1 : 0.2,
            }}
          />
        ))}
      </div>
      <p>{messages[light]}</p>
      <button type="button" onClick={handleNext}>
        다음 신호
      </button>
    </article>
  );
}
