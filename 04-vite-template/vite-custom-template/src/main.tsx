
import { createRoot } from 'react-dom/client'
import AvatarListPage from '@/pages/AvatarPage';







const container = document.getElementById('root');

if(container){
  createRoot(container).render(
    <AvatarListPage></AvatarListPage>
  )
}else{
  console.warn('문서에 root 요소가 존재하지 않습니다.');
  
}





