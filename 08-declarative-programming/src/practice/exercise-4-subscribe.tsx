// --------------------------------------------------------------------------
// 🧩 연습 4. 뉴스레터 구독 폼 (난이도 ⭐⭐⭐)
// --------------------------------------------------------------------------
// 수업에서 만든 퀴즈 폼(declarative-step3-4.tsx)과 같은 순서로 풀어 보세요.
//
// - [ ] STEP 1. 화면이 가질 수 있는 "시각적 상태"를 모두 찾아 Status 타입으로 정의합니다.
// - [ ] STEP 2. email, status 상태를 선언합니다.
// - [ ] STEP 3. 상태에 따라 화면을 선언합니다.
//         typing     : 입력창, 버튼 사용 가능 (이메일이 비어 있으면 버튼 비활성)
//         submitting : 입력창, 버튼 비활성 + "구독 중..." 문구
//         success    : 폼 대신 "🎉 구독 완료!" 문구
//         error      : typing 화면 + "올바른 이메일이 아닙니다." 빨간 문구
// - [ ] STEP 4. 제출하면 subscribe()를 호출하고 결과에 따라 status를 바꿉니다.
// --------------------------------------------------------------------------

/*
💡 힌트
- 이벤트 핸들러 안에서는 "화면"을 고치지 말고 setStatus(...)만 호출하세요.
- 화면이 어떻게 생길지는 오직 return 아래 JSX가 결정합니다.
- form의 기본 제출 동작(새로고침)은 e.preventDefault()로 막아 주세요.
*/

// import { useState } from 'react';
// import { subscribe } from './subscribe';

// TODO: Status 타입을 정의하세요.

export default function SubscribeForm() {
  // TODO: email, status 상태를 선언하세요.

  // TODO: success 상태라면 폼 대신 완료 문구를 반환하세요.

  // TODO: 제출 핸들러를 작성하세요.

  return (
    <form className="form" style={{ padding: 20 }}>
      <h2>연습 4. 뉴스레터 구독</h2>
      <input type="email" aria-label="이메일" placeholder="you@example.com" />
      <button type="submit">구독하기</button>
      {/* TODO: submitting일 때 "구독 중..." */}
      {/* TODO: error일 때 빨간 에러 문구 */}
    </form>
  );
}

