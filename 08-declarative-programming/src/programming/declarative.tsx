// --------------------------------------------------------------------------
// ✅ 선언적 UI STEP 3-1. 정적인 화면 만들기
// --------------------------------------------------------------------------
// - [x] 상태 없이 화면(JSX)만 먼저 그립니다.
// - [ ] 화면이 가질 수 있는 "시각적 상태"를 모두 찾습니다.
// - [ ] 상태(useState)를 선언하고 이벤트로 상태를 바꿉니다.
// - [ ] 에러 상태를 추가합니다.
// --------------------------------------------------------------------------

import { useState } from "react";

/*
imperative.ts의 template(HTML 문자열)을 JSX로 옮긴 것과 같습니다.
아직 아무 동작도 하지 않는, "생김새"만 있는 컴포넌트입니다.
*/

type Status = "success" | "typing" | "submitting";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<string>("typing");

  if (status === "success") {
    return <h1>정답입니다~!</h1>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      if (err instanceof Error) {
        setError(err);
      }
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>오르미 캠프 퀴즈!</h2>
      <p>오르미 캠프에서 가장 잘생긴 사람은?</p>
      <textarea
        aria-label="정답 입력"
        disabled={status === "submitting"}
        onChange={handleTextChange}
      />
      <br />
      <button
        type="submit"
        disabled={answer.length === 0 || status === "submitting"}
      >
        Submit
      </button>
      {error !== null && <p className="Error">{error.message}</p>}
      {status === "submitting" && <p>loading...</p>}
    </form>
  );
}

// 모든 시각적 상태를 한 화면에 나란히 띄워 봅니다.
const statuses: Status[] = ["typing", "submitting", "success"];

const submitForm = (answer: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "심선범") {
        resolve("👍");
      } else {
        reject(new Error("땡! 너는 이미 정답을 알고있다."));
      }
    }, 1500);
  });
};

function FormStates() {
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
