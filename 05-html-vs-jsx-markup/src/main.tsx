import '@/styles/global.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Practice from './practice';
import Learn from './learn';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Learn></Learn>
  </StrictMode>
)
