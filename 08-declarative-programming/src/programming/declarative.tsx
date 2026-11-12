import { useState } from "react";


type Status = 'success' | 'typing' | 'submitting';

export default function Form() {

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<Status>('typing');

  if(status === 'success'){
    return <h1>정답입니다~!</h1>
  }
  


  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');
    try {
      // setStatus('loading');
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      if(err instanceof Error) {
        setError(err);
      }
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>프로그래머스 퀴즈!</h2>
        <p>프로그래머스에서 가장 잘생긴 사람은?</p>
        <textarea 
        aria-label="정답 입력"
        value={answer}
        onChange={handleTextareaChange}
        disabled={status === 'submitting'}></textarea>
        <br />
        <button 
          type="submit"
          disabled={answer.length === 0 || status === 'submitting'}
          >
          Submit
        </button>
          {error !== null &&
          <p className="Error">
            {error.message}
          </p>}
          {
            status === 'submitting' && <p>loading...</p>
          }
      </form>
    </>
  );
}


const submitForm = (answer:string):Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(answer.toLowerCase() === '심선범'){
        resolve('👍');
      }else{
        reject(new Error('땡! 너는 이미 정답을 알고있다.'))
      }
    }, 1500);
  })
}


