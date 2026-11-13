

export type Product = {
  id: number;
  name: string;
  price: number;
};

// TODO ①-1: 자식이 부모에게 알릴 이벤트 prop 3개를 추가하세요.
//   - 카드를 클릭했을 때        → 상품(product)을 넘겨줍니다.
//   - "담기"를 클릭했을 때      → 상품(product)을 넘겨줍니다.
//   - "삭제"를 클릭했을 때      → 상품 id(number)를 넘겨줍니다.
//   힌트: 이벤트 prop 이름은 on으로 시작합니다.
//         "무엇을 클릭했는지"(onButtonClick)가 아니라
//         "무슨 일이 일어났는지"(onAddToCart)를 기준으로 이름을 지어 보세요.
type ProductCardProps = {
  product: Product;
  // 여기에 추가
};

// TODO ①-2: 위에서 추가한 prop을 구조 분해로 꺼내세요.
function ProductCard({ product }: ProductCardProps) {
  // TODO ④-1: 수량 입력칸에 숫자 키만 입력되도록 만드세요.
  //   1) 아래 주석을 풀고 핸들러를 완성한 뒤, input에 onKeyDown으로 연결하세요.
  //   2) e.key가 글자 하나(길이 1)이고 숫자가 아니면 e.preventDefault()를 호출하세요.
  //   생각해 보기: Backspace나 방향키는 왜 막히지 않을까요? (e.key.length를 확인해 보세요)
  //
  // const handleQuantityKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //
  // };

  return (
    // TODO ①-3: 카드(li)를 클릭하면 "카드 클릭" prop이 호출되도록 onClick을 연결하세요.
    <li className="product-card">
      <strong>{product.name}</strong>{" "}
      <span>{product.price.toLocaleString()}원</span>{" "}

      {/* TODO ②-3: ①을 마친 뒤 수량 입력칸을 클릭해 보세요. 상세 보기가 왜 실행될까요?
                     입력칸 클릭이 li까지 전달되지 않도록 막아 보세요. */}
      <input
        type="text"
        inputMode="numeric"
        aria-label={`${product.name} 수량`}
        defaultValue="1"
        size={3}
      />{" "}

      {/* TODO ①-4: "담기"를 클릭하면 "담기" prop을 호출하세요.
          TODO ②-1: "담기"를 눌러 보세요.
                     콘솔에 무엇이 함께 찍히나요? 확인했다면 전파를 막으세요. */}
      <button type="button">담기</button>{" "}

      {/* TODO ①-5: "삭제"를 클릭하면 "삭제" prop을 호출하세요.
          TODO ②-2: 삭제를 눌렀을 때 상세 보기가 열리지 않게 하세요. */}
      <button type="button">삭제</button>
    </li>
  );
}

export default ProductCard;
