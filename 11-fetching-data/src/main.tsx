import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
// import Effect from "./components/effect/Effect-step01";
// import Parent from "./components/ref/Parent";
// import Parent from "./components/effectAndRef/Parent";
// import Parent from "./components/layoutEffect/Parent";
import App from "./components/context/App";

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      {/* 여기에 오늘 만들 컴포넌트를 하나씩 올립니다 */}
      {/* <Effect /> */}
      {/* <Parent></Parent> */}
      <App></App>
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}