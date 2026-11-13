// =============================================================
// [완성 코드] 이벤트 응답 종합 실습: 상품 목록
// -------------------------------------------------------------
// 이 파일 하나에서 다루는 내용
//   ① 커스텀 이벤트 prop 이름 짓기 (onSelect, onAddToCart, onDelete)
//   ② 이벤트 전파 막기 (stopPropagation)
//   ③ 캡처 단계 (onClickCapture)와 e.target / e.currentTarget 비교
//   ④ 키보드 이벤트 (onKeyDown)와 기본 동작 막기 (preventDefault)
//   ⑤ 지역 변수로는 화면이 바뀌지 않는다 (다음 장 State 예고)
//
// 확인 방법: 개발자 도구 콘솔을 열어 두고 하나씩 클릭하거나 입력해 보세요.
// =============================================================

// 자식 컴포넌트와 타입은 components 폴더의 별도 파일에서 가져옵니다.
import ProductCard from "../../components/ProductCard.solution";
import type { Product } from "../../components/ProductCard.solution";

const products: Product[] = [
  { id: 1, name: "무선 키보드", price: 39000 },
  { id: 2, name: "버티컬 마우스", price: 25000 },
  { id: 3, name: "모니터 받침대", price: 18000 },
];

// -------------------------------------------------------------
// 부모 컴포넌트: EventPracticeSolution
// -------------------------------------------------------------
function EventPracticeSolution() {
  // ⑤ 장바구니 개수를 지역 변수에 저장합니다.
  //    "담기"를 누를 때마다 콘솔에는 숫자가 올라가지만 화면은 계속 0개로 보입니다.
  //    이유:
  //      1) 지역 변수가 바뀌어도 React는 다시 렌더링하지 않습니다.
  //      2) 다시 렌더링되더라도 이 줄이 다시 실행되어 0으로 초기화됩니다.
  //    해결 방법은 다음 장 State(useState)에서 배웁니다.
  let cartCount = 0;

  // ① 자식이 알려준 일에 대해 무엇을 할지는 부모가 정합니다.
  const handleSelect = (product: Product) => {
    console.log(`[2. 상세 보기] ${product.name}`);
  };

  const handleAddToCart = (product: Product) => {
    cartCount += 1;
    console.log(`[장바구니] ${product.name} 담음 / cartCount = ${cartCount}`);
  };

  const handleDelete = (id: number) => {
    console.log(`[삭제] id = ${id}`);
  };

  // ④ 검색창 키보드 이벤트
  //    Enter: 검색 / Escape: 입력값 지우기
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글은 조합 중일 때 Enter keydown이 한 번 더 발생합니다.
    // 조합 중인 이벤트는 무시해야 검색이 두 번 실행되지 않습니다.
    if (e.nativeEvent.isComposing) return;

    const input = e.currentTarget;
    if (e.key === "Enter") {
      console.log(`[검색] "${input.value}"`);
    }
    if (e.key === "Escape") {
      input.value = "";
      console.log("[검색] 입력값을 지웠습니다.");
    }
  };

  // ③ 캡처 단계: 이벤트가 위(ul)에서 아래(버튼)로 내려가는 단계입니다.
  //    자식에서 stopPropagation을 호출해도 캡처 핸들러는 이미 실행된 뒤라서 항상 찍힙니다.
  //    e.target        : 실제로 클릭한 요소 (button, input, strong, li ...)
  //    e.currentTarget : 핸들러가 연결된 요소 (항상 ul)
  const handleListClickCapture = (e: React.MouseEvent<HTMLUListElement>) => {
    // console.log("[1. capture] target:", e.target, "/ currentTarget:", e.currentTarget);
  };

  // ③ 버블 단계: 이벤트가 아래에서 위로 올라오는 단계입니다.
  //    카드 빈 곳을 클릭하면 찍히고, 담기/삭제/수량칸을 클릭하면
  //    stopPropagation 때문에 찍히지 않습니다.
  const handleListClick = (e: React.MouseEvent<HTMLUListElement>) => {
    // console.log("[3. bubble] target:", e.target, "/ currentTarget:", e.currentTarget);
  };

  return (
    <details>
      <summary>
        <b>종합 실습: 상품 목록 (완성 코드)</b>
      </summary>

      <input
        type="search"
        aria-label="상품 검색"
        placeholder="상품 검색 (Enter: 검색, Esc: 지우기)"
        onKeyDown={handleSearchKeyDown}
      />

      <ul onClickCapture={handleListClickCapture} onClick={handleListClick}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleSelect}
            onAddToCart={handleAddToCart}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      {/* ⑤ 콘솔에서는 개수가 올라가는데 화면은 계속 0개입니다. 왜일까요? */}
      <p>장바구니: {cartCount}개</p>
    </details>
  );
}

export default EventPracticeSolution;
