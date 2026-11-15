// --------------------------------------------------------------------------
// 🧩 연습 1. 좋아요 버튼 (난이도 ⭐)
// --------------------------------------------------------------------------
// - [ ] liked 상태(boolean)를 선언합니다.
// - [ ] 버튼을 클릭하면 liked 상태를 반대로 바꿉니다.
// - [ ] liked가 true면 "❤️ 좋아요 취소", false면 "🤍 좋아요"를 보여 줍니다.
// - [ ] 좋아요 수(count)는 liked 상태에 따라 10 또는 11로 보여 줍니다.
// --------------------------------------------------------------------------

/*
아래는 같은 기능을 "명령형"으로 작성한 코드입니다.

  button.addEventListener('click', () => {
    if (button.textContent === '🤍 좋아요') {
      button.textContent = '❤️ 좋아요 취소';
      countEl.textContent = '11';
    } else {
      button.textContent = '🤍 좋아요';
      countEl.textContent = '10';
    }
  });

화면(textContent)을 보고 → 화면을 직접 고칩니다.
선언형에서는 "상태"를 보고 → 화면이 어떻게 생겼는지만 적어 보세요.

💡 힌트: count도 useState로 만들어야 할까요? liked만 알면 계산할 수 있지 않을까요?
*/

// import { useState } from 'react';

export default function LikeButton() {
  // TODO: liked 상태를 선언하세요.

  // TODO: 클릭하면 liked를 반대로 바꾸는 함수를 작성하세요.

  return (
    <article style={{ padding: 20 }}>
      <h2>연습 1. 좋아요 버튼</h2>
      {/* TODO: liked 상태에 따라 버튼 글자를 바꾸세요. */}
      <button type="button">🤍 좋아요</button>
      {/* TODO: liked 상태에 따라 10 또는 11을 보여 주세요. */}
      <p>좋아요 수: 10</p>
    </article>
  );
}
