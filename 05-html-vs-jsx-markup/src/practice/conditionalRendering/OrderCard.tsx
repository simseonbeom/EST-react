/**
 * 🧪 실습: 조건부 렌더링으로 주문 상태 카드 만들기
 *
 * 실행 방법
 *   src/main.tsx 에서 <Learn /> 대신 <Practice /> 를 렌더링하세요.
 *     import Practice from './practice'
 *
 * 규칙
 *   - 화면에는 data.ts 의 주문 4건(결제 대기 / 배송 중 / 배송 완료 / 취소)이 카드로 표시됩니다.
 *     한 컴포넌트가 order 값에 따라 다르게 보이도록 만드는 것이 목표입니다.
 *   - 아래 TODO 를 순서대로 해결하세요. 정답은 OrderCard.solution.tsx 에 있습니다.
 *   - 처음에는 "사용하지 않는 변수" 에러(빨간 밑줄)가 보입니다. 조건부 렌더링을 모두 적용하면 사라져요.
 *     다 풀고 나서 npx tsc -b --noEmit 이 통과하는지 확인하세요.
 */
import type { JSX } from 'react';
import type { Order } from './data';

interface Props {
  order: Order;
}

function OrderCard({ order }: Props): JSX.Element {
  const { id, productName, price, status, isMember, couponCount, requestMessage } = order;

  // TODO 1. if 문 + 조기 반환(early return)
  //         status 가 'canceled' 이면 아래 JSX 대신 취소 카드만 반환하세요.
  //         <article className="orderCard canceled">
  //           <p>주문 A-1004 은(는) 취소되었습니다.</p>
  //         </article>

  // TODO 2. switch 문으로 status 에 맞는 문구를 statusLabel 에 담으세요.
  //         pending → '결제 대기' / shipping → '배송 중' / delivered → '배송 완료'
  const statusLabel = '상태';

  return (
    // TODO 3. className 에 status 를 추가해 상태별 색이 적용되도록 하세요.
    //         예) className="orderCard shipping"  (힌트: 템플릿 리터럴)
    <article className="orderCard">
      <header>
        <span className="orderId">주문번호</span>
        {/* TODO 4. 삼항 연산자: isMember 가 true 면 '회원', false 면 '비회원' 을 출력하세요.
                    회원일 때는 className 도 'badge member' 가 되도록 바꿔 보세요. */}
        <span className="badge">회원 여부</span>
      </header>

      {/* 여기는 조건 없이 바인딩만 하면 됩니다. 가격은 toLocaleString() 으로 129,000원 처럼 출력하세요. */}
      <h2>상품명</h2>
      <p className="price">가격</p>

      <p className="status">
        {/* TODO 5. && 연산자: 배송 중(shipping)일 때만 스피너를 보여 주세요.
                    <img src="/icons/spinner.svg" alt="" /> */}
        {statusLabel}
      </p>

      {/* TODO 6. 쿠폰을 사용한 주문만 "🎟️ 쿠폰 2장 사용" 을 보여 주세요.
                  먼저 {couponCount && <p className="coupon">...</p>} 로 작성하고 화면을 확인해 보세요.
                  쿠폰이 0장인 카드에 무엇이 보이나요? 왜 그런지 생각해 보고 고쳐 보세요. */}

      {/* TODO 7. requestMessage 는 있을 수도, 없을 수도 있는 값입니다(data.ts 의 ? 확인).
                  값이 있을 때만 <p className="message">📝 요청사항</p> 을 보여 주세요. */}

      {/* TODO 8. 배송 완료(delivered)면 '리뷰 쓰기' 버튼, 그 외에는 '배송 조회' 버튼을 렌더링하세요. */}
      <button type="button">버튼</button>
    </article>
  );
}

export default OrderCard;
