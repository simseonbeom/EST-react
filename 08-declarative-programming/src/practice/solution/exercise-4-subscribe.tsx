// --------------------------------------------------------------------------
// ✅ 연습 4. 뉴스레터 구독 폼 (정답)
// --------------------------------------------------------------------------
// - [x] STEP 1. 화면이 가질 수 있는 "시각적 상태"를 모두 찾아 Status 타입으로 정의합니다.
// - [x] STEP 2. email, status 상태를 선언합니다.
// - [x] STEP 3. 상태에 따라 화면을 선언합니다.
// - [x] STEP 4. 제출하면 subscribe()를 호출하고 결과에 따라 status를 바꿉니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import { subscribe } from '../subscribe';

type Status = 'typing' | 'submitting' | 'success' | 'error';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('typing');

  if (status === 'success') {
    return <h1 style={{ padding: 20 }}>🎉 구독 완료!</h1>;
  }

  const isSubmitting = status === 'submitting';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // 핸들러는 "상태"만 바꿉니다. 화면을 직접 고치는 코드는 한 줄도 없습니다.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await subscribe(email);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="form" style={{ padding: 20 }} onSubmit={handleSubmit}>
      <h2>연습 4. 뉴스레터 구독</h2>
      <input
        type="email"
        aria-label="이메일"
        placeholder="you@example.com"
        value={email}
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={email.length === 0 || isSubmitting}>
        구독하기
      </button>
      {isSubmitting && <p>구독 중...</p>}
      {status === 'error' && <p style={{ color: 'red' }}>올바른 이메일이 아닙니다.</p>}
    </form>
  );
}

