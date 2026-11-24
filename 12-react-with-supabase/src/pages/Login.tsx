

import { useContext, useId, useState } from 'react'
import S from './Login.module.css'
import supabase from '@/supabase/supabase';
import { RouterContext } from '@/router/RouterProvider';

function Login() {
  const userId = useId();
  const pwId = useId();
  const [error,setError] = useState<string|null>(null);
    const {setHistoryRoute} = useContext(RouterContext)!;
    const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if(error){
      console.log( error, data  );
 
      setError(error.message)
    }else{
      console.log('로그인 성공');
            history.pushState(null, "", "/");
      setHistoryRoute('/');
    }
  }

  return (
    <div className={S.container}>
      <div>
        <form onSubmit={handleLogin}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input
              id={userId}
              type="text"
              name='email'
              required
              aria-required="true"
                            value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호:</label>
            <input
              id={pwId}
              type="password"
              name='password'
              required
              aria-required="true"
                            value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">로그인</button>
          <hr />
                    <a href="" onClick={(e)=>{
            e.preventDefault();
            history.pushState(null, "", "/Register");
            setHistoryRoute('/Register');
          }}>아직도 2.9cm 회원이 아니세요?</a>
        </form>
      </div>
    </div>
  )
}
export default Login