import kakaoTalkImagePath from '@/assets/kakao-talk.svg?url';
import nextJsImagePath from '@/assets/next-js.svg?url';
import reactImagePath from '@/assets/react.svg?url';
import viteImagePath from '@/assets/vite.svg?url';
import { isTrueOrFalse } from '@/utils/isTrueOrFalse';

interface Props {
  imageType:string;
}

function ConditionalRendering({imageType}:Props) {

  let imagePath = '';
  let printText;

  switch (imageType.toLowerCase()) {
   case 'react':
      imagePath = reactImagePath;
      printText = 'React';
      break;
    case 'vite':
      imagePath = viteImagePath;
      printText = 'Vite';
      break;
    case 'next.js':
      imagePath = nextJsImagePath;
      printText = 'Next.js';
      break;
    case 'kakao talk':
      imagePath = kakaoTalkImagePath;
      printText = 'Kakao Talk';
      break;
    default:
      printText = '허용된 이미지 타입이 존재하지 않습니다.';
  }
  // [수정] isTrueOrFalse() 를 렌더링 중 두 번(아래 spinnerOrVite, <dt> 라벨) 따로 호출해 "스피너 표시" 라벨과 실제 이미지가 서로 어긋남
  //        → 한 번만 호출한 결과를 변수에 담아 두 곳에서 함께 사용
  const isShowSpinner = isTrueOrFalse();
  
    const spinnerOrVite = isShowSpinner ? (
    <img className="spinner" src="/icons/spinner.svg" alt="로딩 중..." />
  ) : (
    <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
  );

  
  return (
      <>
      <dt>
        조건부 렌더링(conditional rendering) ({isShowSpinner && '스피너 표시'}
        )
      </dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* [수정] 허용되지 않은 imageType 이면 src="" 인 <img> 가 렌더링되어 React 19 경고·불필요한 요청 발생 → imagePath 가 있을 때만 렌더링 (기존: <img src={imagePath} alt="" />) */}
          {imagePath && <img src={imagePath} alt="" />}
          <p>{printText}</p>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">{spinnerOrVite}</div>
      </dd>
    </>
  )
}
export default ConditionalRendering