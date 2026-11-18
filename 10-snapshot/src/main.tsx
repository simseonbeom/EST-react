import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/main.css';
import Playground from './Playground';


const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Playground></Playground>
    </StrictMode>
  );
} else {
  // [수정] 실제 대상은 #react-app인데 경고 문구가 "#app" → "#react-app"으로 수정
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
