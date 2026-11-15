// --------------------------------------------------------------------------
// ✅ 연습 1. 좋아요 버튼 (정답)
// --------------------------------------------------------------------------
// - [x] liked 상태(boolean)를 선언합니다.
// - [x] 버튼을 클릭하면 liked 상태를 반대로 바꿉니다.
// - [x] liked가 true면 "❤️ 좋아요 취소", false면 "🤍 좋아요"를 보여 줍니다.
// - [x] 좋아요 수(count)는 liked 상태에 따라 10 또는 11로 보여 줍니다.
// --------------------------------------------------------------------------

import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  // count는 상태가 아닙니다. liked에서 "계산"할 수 있기 때문입니다.
  const count = liked ? 11 : 10;

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <article style={{ padding: 20 }}>
      <h2>연습 1. 좋아요 버튼</h2>
      <button type="button" onClick={handleClick}>
        {liked ? '❤️ 좋아요 취소' : '🤍 좋아요'}
      </button>
      <p>좋아요 수: {count}</p>
    </article>
  );
}
