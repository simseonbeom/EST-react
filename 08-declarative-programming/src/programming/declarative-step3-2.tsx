// --------------------------------------------------------------------------
// ✅ 선언적 UI STEP 3-2. 시각적 상태 찾기
// --------------------------------------------------------------------------
// - [x] 상태 없이 화면(JSX)만 먼저 그립니다.
// - [x] 화면이 가질 수 있는 "시각적 상태"를 모두 찾습니다.
// - [ ] 상태(useState)를 선언하고 이벤트로 상태를 바꿉니다.
// - [ ] 에러 상태를 추가합니다.
// --------------------------------------------------------------------------

/*
이 폼은 어떤 화면들을 가질까요?
- typing     : 입력 중 (입력창, 버튼 사용 가능)
- submitting : 제출 중 (입력창, 버튼 비활성 + loading...)
- success    : 정답 (폼 대신 "정답입니다~!")

imperative.ts에서는 show/hide/enable/disable로 "어떻게 바꿀지"를 하나하나 지시했습니다.
선언형에서는 "status가 이 값이면 화면은 이렇게 생겼다"만 적습니다.
*/

type Status = 'success' | 'typing' | 'submitting';

// 아직 상태(useState)는 없습니다. status를 props로 받아서 화면만 확인합니다.
function Form({ status = 'typing' }: { status?: Status }) {
  if (status === 'success') {
    return <h1>정답입니다~!</h1>;
  }

  return (
    <form className="form">
      <h2>프로그래머스 퀴즈!</h2>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea aria-label="정답 입력" disabled={status === 'submitting'} />
      <br />
      <button type="submit" disabled={status === 'submitting'}>
        Submit
      </button>
      {status === 'submitting' && <p>loading...</p>}
    </form>
  );
}

// 모든 시각적 상태를 한 화면에 나란히 띄워 봅니다.
const statuses: Status[] = ['typing', 'submitting', 'success'];

export default function FormStates() {
  return (
    <>
      {statuses.map((status) => (
        <section key={status}>
          <h4>status: {status}</h4>
          <Form status={status} />
          <hr />
        </section>
      ))}
    </>
  );
}
