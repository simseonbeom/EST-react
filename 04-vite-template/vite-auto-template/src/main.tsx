import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import AvatarListPage from './pages/AvatarList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AvatarListPage />
  </StrictMode>,
)
