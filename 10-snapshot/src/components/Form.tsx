import { useState } from "react";

// 이번엔 여러 값을 가진 객체를 초깃값으로 만들어봄

function getInitialForm() {
  console.log('📦 복잡한 초기 상태 계산 중...');
  return {
    title: '',
    content: '',
    createdAt: new Date().toISOString(),
  };
}

export default function Form() {
  const [form, setForm] = useState(getInitialForm);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      title: e.target.value
    })
  }

  return (
    <div>
      <input
        value={form.title}
        onChange={handleChange}
        placeholder="제목"
        aria-label="제목"
      />
      <p>작성일시: {form.createdAt}</p>
    </div>
  );
}