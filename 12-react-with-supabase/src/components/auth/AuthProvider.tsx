import supabase from "@/supabase/supabase";
import { createContext, useContext, useEffect, useState } from "react"


interface User{
  id:string;
  email:string;
  nickname:string;
}

interface AuthContextType{
  user: User | null;
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children}:{children:React.ReactNode}) {

  const [user,setUser] = useState<User | null>(null)

  useEffect(()=>{
    supabase.auth.getUser().then(({data:{user}})=>{
      if(user){
        setUser({
          id:user.id,
          email:user.email!,
          nickname:user.user_metadata.nickname ?? user.email!.split('@')[0],
        })
      }
    })
  },[])

  return (
    <AuthContext value={{user, isAuth:!!user}}>
      {children}
    </AuthContext>
  )
}

export function useAuth(){
  const ctx = useContext(AuthContext);
  if(!ctx) throw new Error('useAuth는 <AuthProvider> 안에서 사용해야 합니다.');
  return ctx;
}