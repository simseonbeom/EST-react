// --------------------------------------------------------------------------
// ✅ 선언적 UI STEP 3-4. 에러 상태 추가 (완성)
// --------------------------------------------------------------------------
// - [x] 상태 없이 화면(JSX)만 먼저 그립니다.
// - [x] 화면이 가질 수 있는 "시각적 상태"를 모두 찾습니다.
// - [x] 상태(useState)를 선언하고 이벤트로 상태를 바꿉니다.
// - [x] 에러 상태를 추가합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';

type Status = 'success' | 'typing' | 'submitting';

export default function Form() {
  const [answer, setAnswer] = useState('');
  // 에러도 "상태"입니다. 에러가 있으면 메시지를 보여 줍니다.
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<Status>('typing');

  if (status === 'success') {
    return <h1>정답입니다~!</h1>;
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      // 오답이면 다시 입력할 수 있는 화면(typing)으로 돌려 놓고, 에러를 기억합니다.
      setStatus('typing');
      if (err instanceof Error) {
        setError(err);
      }
    }
  };

  /*
  imperative.ts의 handleFormSubmit과 비교해 보세요.
  - 명령형: disable, show, hide, enable ... 요소마다 "어떻게" 바꿀지 지시
  - 선언형: setStatus, setError ... "상태"만 바꾸고, 화면은 아래 JSX가 결정
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
      <button type="submit" disabled={answer.length === 0 || status === 'submitting'}>
        Submit
      </button>
      {error !== null && <p className="Error">{error.message}</p>}
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
