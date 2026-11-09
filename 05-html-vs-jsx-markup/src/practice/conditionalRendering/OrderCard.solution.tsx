import type { JSX } from 'react';
import type { Order } from './data';

interface Props {
  order: Order;
}

function OrderCardSolution({ order }: Props): JSX.Element {
  const { id, productName, price, status, isMember, couponCount, requestMessage } = order;

  // 1. if 문 + 조기 반환(early return): 취소된 주문은 간단한 카드만 보여주고 끝냄
  if (status === 'canceled') {
    return (
      <article className="orderCard canceled">
        <p>주문 {id} 은(는) 취소되었습니다.</p>
      </article>
    );
  }

  // 2. switch 문: 상태 값에 따라 화면에 보일 문구를 결정
  let statusLabel = '';
  switch (status) {
    case 'pending':
      statusLabel = '결제 대기';
      break;
    case 'shipping':
      statusLabel = '배송 중';
      break;
    case 'delivered':
      statusLabel = '배송 완료';
      break;
  }

  return (
    // 3. 조건에 따라 className 바꾸기 (상태별 색상)
    <article className={`orderCard ${status}`}>
      <header>
        <span className="orderId">{id}</span>
        {/* 4. 삼항 연산자: 둘 중 하나를 렌더링 */}
        <span className={isMember ? 'badge member' : 'badge'}>{isMember ? '회원' : '비회원'}</span>
      </header>

      <h2>{productName}</h2>
      <p className="price">{price.toLocaleString()}원</p>

      <p className="status">
        {/* 5. && 연산자: 조건이 참일 때만 렌더링 */}
        {status === 'shipping' && <img src="/icons/spinner.svg" alt="" />}
        {statusLabel}
      </p>

      {/* 6. && 의 함정: couponCount && ... 로 쓰면 0 이 화면에 그대로 출력됨 → 비교식으로 boolean 을 만들어야 함 */}
      {couponCount > 0 && <p className="coupon">🎟️ 쿠폰 {couponCount}장 사용</p>}

      {/* 7. 선택(optional) 속성: 값이 있을 때만 렌더링 */}
      {requestMessage && <p className="message">📝 {requestMessage}</p>}

      {/* 8. 삼항 연산자로 서로 다른 요소 렌더링 */}
      {status === 'delivered' ? (
        <button type="button">리뷰 쓰기</button>
      ) : (
        <button type="button">배송 조회</button>
      )}
    </article>
  );
}

export default OrderCardSolution;
