// =============================================================
// [실습 코드] 이벤트 응답 종합 실습: 상품 목록
// -------------------------------------------------------------
// 화면 구성은 이미 만들어져 있습니다. 이벤트만 연결하면 됩니다.
// TODO 번호 순서대로 진행하세요.
//
//   ① 커스텀 이벤트 prop 이름 짓기 (onSelect, onAddToCart, onDelete)
//   ② 이벤트 전파 막기 (stopPropagation)
//   ③ 캡처 단계 (onClickCapture)와 e.target / e.currentTarget 비교
//   ④ 키보드 이벤트 (onKeyDown)와 기본 동작 막기 (preventDefault)
//   ⑤ 지역 변수로는 화면이 바뀌지 않는다 (다음 장 State 예고)
//
// 확인 방법: 개발자 도구 콘솔을 열어 두고 하나씩 클릭하거나 입력해 보세요.
// =============================================================

// 자식 컴포넌트와 타입은 components 폴더의 별도 파일에서 가져옵니다.
import ProductCard from "../../components/ProductCard";
import type { Product } from "../../components/ProductCard";

const products: Product[] = [
  { id: 1, name: "무선 키보드", price: 39000 },
  { id: 2, name: "버티컬 마우스", price: 25000 },
  { id: 3, name: "모니터 받침대", price: 18000 },
];

// -------------------------------------------------------------
// 부모 컴포넌트: EventPractice
// -------------------------------------------------------------
function EventPractice() {
  // TODO ⑤: 아래 TODO ①-6에서 "담기" 핸들러를 만들 때 cartCount를 1씩 늘려 보세요.
  //   콘솔에서는 숫자가 올라가는데, 화면의 "장바구니: 0개"는 왜 바뀌지 않을까요?
  //   (정답은 완성 코드의 주석에 있습니다.)
  // eslint-disable-next-line prefer-const -- ⑤를 마치면 이 줄은 지워도 됩니다.
  let cartCount = 0;

  // TODO ①-6: 자식이 알려줄 일에 대해 부모가 무엇을 할지 정하세요.
  //   아래 주석을 풀고 콘솔에 메시지를 출력하도록 완성한 뒤 ProductCard에 prop으로 넘기세요.
  //
  // const handleSelect = (product: Product) => {
  //   // 예: [2. 상세 보기] 무선 키보드
  // };
  //
  // const handleAddToCart = (product: Product) => {
  //   // 예: [장바구니] 무선 키보드 담음 / cartCount = 1
  // };
  //
  // const handleDelete = (id: number) => {
  //   // 예: [삭제] id = 1
  // };

  // TODO ④-2: 검색창 키보드 이벤트를 완성하고 input에 onKeyDown으로 연결하세요.
  //   - Enter  : 콘솔에 [검색] "입력값" 출력
  //   - Escape : 입력값 지우기
  //   주의: 한글을 입력하고 Enter를 누르면 검색이 두 번 실행될 수 있습니다.
  //         e.nativeEvent.isComposing을 콘솔에 찍어 보고 해결해 보세요.
  //
  // const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //
  // };

  // TODO ③: ul에 캡처 단계 핸들러(onClickCapture)와 버블 단계 핸들러(onClick)를 각각 연결하세요.
  //   두 핸들러 모두 e.target과 e.currentTarget을 콘솔에 출력합니다.
  //   - 카드 빈 곳, "담기", 수량칸을 차례로 클릭하고 출력 순서를 정리해 보세요.
  //   - "담기"를 클릭하면 캡처는 찍히는데 버블은 찍히지 않습니다. 왜일까요?
  //
  // const handleListClickCapture = (e: React.MouseEvent<HTMLUListElement>) => {
  //   // 예: [1. capture] target: ... / currentTarget: ...
  // };
  //
  // const handleListClick = (e: React.MouseEvent<HTMLUListElement>) => {
  //   // 예: [3. bubble] target: ... / currentTarget: ...
  // };

  return (
    <details>
      <summary>
        <b>종합 실습: 상품 목록 (실습 코드)</b>
      </summary>

      {/* TODO ④-2: onKeyDown 연결 */}
      <input
        type="search"
        aria-label="상품 검색"
        placeholder="상품 검색 (Enter: 검색, Esc: 지우기)"
      />

      {/* TODO ③: onClickCapture, onClick 연결 */}
      <ul>
        {products.map((product) => (
          // TODO ①-7: ①-1에서 만든 prop 3개에 ①-6의 핸들러를 넘기세요.
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>

      {/* TODO ⑤: 콘솔에서는 개수가 올라가는데 화면은 계속 0개입니다. 왜일까요? */}
      <p>장바구니: {cartCount}개</p>
    </details>
  );
}

export default EventPractice;
