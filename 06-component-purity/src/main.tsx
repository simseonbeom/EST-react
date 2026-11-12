


import './styles/main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Headline from './components/Headline';

const container = document.getElementById('root');

if (!container) throw new Error('문서에 "#app" 요소가 존재하지 않습니다.');

createRoot(container).render(
  <StrictMode>
    <Headline />
  </StrictMode>
);
