import { useId, useState } from "react";
import S from "./Register.module.css";
import supabase from "@/supabase/supabase";

function Register() {
  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const nickId = useId();
  const avatarId = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    setError(null);
    // 기본 유효성 검사
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // ✅ 1. Supabase 유저 생성
    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{ nickname }
      }
    });
 
    if (signUpError || !user) {
      console.log(signUpError);
 
      setError(signUpError?.message || "회원가입에 실패했습니다.");
      return;
    }
 
const userId = user.id;
 
    if (avatarFile) {
      const fileExt = avatarFile.name.split(".").pop();
      const fileName = `${userId}.${fileExt}`;
      const filePath = `${fileName}`;
 
      console.log(filePath);
 
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, avatarFile, {
          upsert: true,
        });
 
      if (uploadError) {
        console.log(uploadError);
 
        setError("이미지 업로드에 실패했습니다.");
        return;
      }
    }
        alert("회원가입 완료!");
    history.pushState(null, "", "/Login");
    location.reload(); // 로그인 상태 동기화
  };

  

  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input
            id={emailId}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input
            id={pwId}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input
            id={pwConfirmId}
            type="password"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={nickId}>닉네임</label>
          <input
            id={nickId}
            type="text"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={avatarId}>프로필 이미지</label>
          <input
            id={avatarId}
            type="file"
            accept="image/*" 
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setAvatarFile(file);

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setAvatarPreview(reader.result as string);
                };
                reader.readAsDataURL(file);
 
              } else {
                setAvatarPreview(null);
              }
            }}
            
          />

          {avatarPreview && (
            <div style={{ marginTop: "1rem",textAlign:'center' }}>
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          )}
        </div>

        <button type="submit">가입하기</button>
         {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
}
export default Register;
