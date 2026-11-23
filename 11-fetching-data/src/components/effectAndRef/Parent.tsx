import { useEffect, useRef, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [messages, setMessages] = useState<string[]>([
    "안녕하세요",
    "오늘 날씨 어때요?",
    "좋은 하루 되세요!",
  ]);
  const listRef = useRef<HTMLDivElement | null>(null);

  const addMessage = () => {
    setMessages((prev) => [...prev, `새 메시지 ${prev.length + 1}`]);
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // scrollIntoView는 window까지 스크롤하므로, 메시지 박스만 스크롤
       list?.scrollIntoView({ behavior: "smooth" });
    // list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <h2>채팅방</h2>
      <div
        ref={listRef}
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <Child key={idx} message={msg} />
        ))}
      </div>
      <button onClick={addMessage}>메시지 보내기</button>
    </div>
  );
}