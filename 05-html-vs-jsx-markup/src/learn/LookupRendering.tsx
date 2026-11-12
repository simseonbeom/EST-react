import kakaoTalkImagePath from '@/assets/kakao-talk.svg?url';
import nextJsImagePath from '@/assets/next-js.svg?url';
import reactImagePath from '@/assets/react.svg?url';
import viteImagePath from '@/assets/vite.svg?url';

// [Before] ConditionalRendering.tsx 의 switch 문
//
//   switch (imageType.toLowerCase()) {
//     case 'react':
//       imagePath = reactImagePath;
//       printText = 'React';
//       break;
//     case 'vite': ...
//     default:
//       printText = '허용된 이미지 타입이 존재하지 않습니다.';
//   }
//
// - 타입이 늘어날 때마다 case 가 4줄씩 늘어남
// - "어떤 타입에 어떤 이미지인가(데이터)"와 "어떻게 고르는가(로직)"가 뒤섞여 있음
//
// [After] "타입 → 데이터" 객체(lookup table)를 만들어 두고 키로 꺼내 쓰기

interface ImageInfo {
  src: string;
  label: string;
}

// 컴포넌트 밖에 선언 → 렌더링할 때마다 다시 만들 필요 없는 고정 데이터
const IMAGE_MAP: Record<string, ImageInfo> = {
  react: { src: reactImagePath, label: 'React' },
  vite: { src: viteImagePath, label: 'Vite' },
  'next.js': { src: nextJsImagePath, label: 'Next.js' },
  'kakao talk': { src: kakaoTalkImagePath, label: 'Kakao Talk' },
};

interface Props {
  imageType: string;
}

function LookupRendering({ imageType }: Props) {
  // 없는 키로 꺼내면 undefined → switch 의 default 역할
  const image: ImageInfo | undefined = IMAGE_MAP[imageType.toLowerCase()];

  return (
    <>
      <dt>객체 매핑(lookup table)을 활용한 조건부 렌더링</dt>

      {/* ① switch 대신 객체에서 꺼내기 */}
      <dd>
        <p>
          ① switch 문 대신 매핑 객체에서 이미지 타입(image type)으로 데이터를 꺼내
          렌더링합니다.
        </p>
        <div className="conditionalRendering">
          {image ? (
            <>
              <img src={image.src} alt="" />
              <p>{image.label}</p>
            </>
          ) : (
            <p>허용된 이미지 타입이 존재하지 않습니다.</p>
          )}
        </div>
      </dd>

      {/* ② 매핑 객체 = 데이터 → 리스트 렌더링과 바로 연결 */}
      <dd>
        <p>
          ② 매핑 객체는 데이터이므로 리스트 렌더링에도 그대로 쓸 수 있습니다. 새
          타입을 추가하려면 객체에 한 줄만 추가하면 됩니다.
        </p>
        <ul className="lookupList">
          {Object.entries(IMAGE_MAP).map(([type, { src, label }]) => (
            <li key={type}>
              <img src={src} alt="" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </dd>
    </>
  );
}

export default LookupRendering;
