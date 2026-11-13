// --------------------------------------------------------------------------
// ✅ 선언적 UI STEP 3-3. 상태 선언 + 이벤트로 상태 바꾸기
// --------------------------------------------------------------------------
// - [x] 상태 없이 화면(JSX)만 먼저 그립니다.
// - [x] 화면이 가질 수 있는 "시각적 상태"를 모두 찾습니다.
// - [x] 상태(useState)를 선언하고 이벤트로 상태를 바꿉니다.
// - [ ] 에러 상태를 추가합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';

type Status = 'success' | 'typing' | 'submitting';

export default function Form() {
  /*
  props로 받던 status를 이제 컴포넌트가 직접 기억합니다.
  answer: 입력한 정답 → 버튼 활성/비활성을 결정
  status: 지금 어떤 화면인가?
  */
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<Status>('typing');

  if (status === 'success') {
    return <h1>정답입니다~!</h1>;
  }

  // 이벤트 핸들러는 "상태만" 바꿉니다. 화면은 React가 다시 그립니다.
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    await submitForm(answer);
    setStatus('success');
  };

  /*
  🤔 오답을 입력하면 어떻게 될까요?
  submitForm이 reject되면 setStatus('success')까지 가지 못하고
  화면은 계속 loading... 상태에 머뭅니다. → 다음 단계에서 해결
  */

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>프로그래머스 퀴즈!</h2>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea
        aria-label="정답 입력"
        value={answer}
        onChange={handleTextareaChange}
        disabled={status === 'submitting'}
      />
      <br />
      {/* imperative.ts의 handleTextareaChange에 있던 if/else가 조건 한 줄로 바뀝니다. */}
      <button type="submit" disabled={answer.length === 0 || status === 'submitting'}>
        Submit
      </button>
      {status === 'submitting' && <p>loading...</p>}
    </form>
  );
}

const submitForm = (answer: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === '심선범') {
        resolve('👍');
      } else {
        reject(new Error('땡! 너는 이미 정답을 알고있다.'));
      }
    }, 1500);
  });
};
