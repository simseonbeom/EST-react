// --------------------------------------------------------------------------
// ✅ 연습 3. 한 줄 소개 글자 수 제한 (정답)
// --------------------------------------------------------------------------
// - [x] 입력값(text) 상태를 선언하고 input과 연결합니다.
// - [x] "현재 글자 수 / 20"을 보여 줍니다.
// - [x] 20자를 넘으면 글자 수를 빨간색으로 보여 주고, 경고 문구를 보여 줍니다.
// - [x] 비어 있거나 20자를 넘으면 "저장" 버튼을 비활성화합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';

const MAX_LENGTH = 20;

export default function CharCounter() {
  // 상태는 단 하나! 나머지는 모두 text에서 계산합니다.
  const [text, setText] = useState('');

  const length = text.length;
  const isOver = length > MAX_LENGTH;
  const isDisabled = length === 0 || isOver;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <article style={{ padding: 20 }}>
      <h2>연습 3. 한 줄 소개</h2>
      <input type="text" aria-label="한 줄 소개" value={text} onChange={handleChange} />
      <p style={{ color: isOver ? 'red' : undefined }}>
        {length} / {MAX_LENGTH}
      </p>
      {isOver && <p style={{ color: 'red' }}>{MAX_LENGTH}자 이내로 입력해 주세요</p>}
      <button type="button" disabled={isDisabled}>
        저장
      </button>
    </article>
  );
}
