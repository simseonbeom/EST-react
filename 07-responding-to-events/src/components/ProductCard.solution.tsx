// =============================================================
// [완성 코드] 자식 컴포넌트: ProductCard
// 부모 컴포넌트: learn/responding-to-events/EventPractice.solution.tsx
// -------------------------------------------------------------
// 컴포넌트를 별도 파일로 분리하면
//   - export default로 컴포넌트를 내보내고
//   - 부모 파일에서 import로 가져와 사용합니다.
//   - 부모와 함께 쓰는 타입(Product)은 export type으로 내보냅니다.
// =============================================================

export type Product = {
  id: number;
  name: string;
  price: number;
};

// ① 커스텀 이벤트 prop 이름 짓기
//    - 이벤트 prop 이름은 on으로 시작합니다.
//    - "무엇을 클릭했는지"(onButtonClick)가 아니라
//      "무슨 일이 일어났는지"(onAddToCart)를 기준으로 이름을 짓습니다.
//    - 실제로 무엇을 할지는 부모가 정합니다. 자식은 "이 일이 일어났다"고 알리기만 합니다.
type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onDelete: (id: number) => void;
};

function ProductCard({ product, onSelect, onAddToCart, onDelete }: ProductCardProps) {
  // ④ 수량 입력: 숫자가 아닌 키를 누르면 입력되지 않게 막습니다.
  //    e.key.length === 1 이면 글자 하나를 입력하는 키입니다.
  //    Backspace, Tab, ArrowLeft 같은 키는 길이가 1보다 길어서 그대로 통과합니다.
  const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
      e.preventDefault(); // 브라우저 기본 동작(글자 입력)을 막습니다.
      console.log(`[수량] "${e.key}" 는 숫자가 아니라서 막았습니다.`);
    }
  };

  return (
    // 카드 아무 곳이나 클릭하면 상세 보기가 실행됩니다.
    <li className="product-card" onClick={() => onSelect(product)}>
      <strong>{product.name}</strong>{" "}
      <span>{product.price.toLocaleString()}원</span>{" "}

      <input
        type="text"
        inputMode="numeric"
        aria-label={`${product.name} 수량`}
        defaultValue="1"
        size={3}
        onKeyDown={handleQuantityKeyDown}
        // ② 입력칸을 클릭할 때도 이벤트가 li까지 올라가서 상세 보기가 실행됩니다.
        //    입력칸 클릭은 상세 보기가 아니므로 여기서 전파를 멈춥니다.
        onClick={(e) => e.stopPropagation()}
      />{" "}

      <button
        type="button"
        onClick={(e) => {
          // ② stopPropagation이 없으면 "담기"를 눌렀을 때
          //    부모 li의 onClick(상세 보기)까지 함께 실행됩니다.
          //    한 줄을 주석 처리해 보고 콘솔에 무엇이 찍히는지 확인해 보세요.
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        담기
      </button>{" "}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // ② 삭제를 눌렀는데 상세 보기가 열리면 안 됩니다.
          onDelete(product.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default ProductCard;
