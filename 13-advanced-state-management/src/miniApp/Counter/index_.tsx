import { GrFormDown, GrFormUp } from "react-icons/gr";
import S from "./style.module.css";
import { memo, useMemo, useState } from "react";
import tw from "@/utils/tw";
import CountButton_ from "./CountButton_";
import CountDisplay_ from "./CountDisplay_";
import useCounter from "@/hook/useCounter";

// TODO(Part 1) 지금은 숫자 0과 빈 함수(() => {})를 내려주고 있습니다. 상태를 연결해 움직이게 만드세요.

function Counter({ className }: { className?: string }) {
  const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } =
    useCounter();

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay_ count={count} />

      <div role="group" className={S.group}>
        <CountButton_
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
          onUpdate={increment}
        >
          {useMemo(
            () => (
              <GrFormUp />
            ),
            [],
          )}
          <GrFormUp />
        </CountButton_>

        <CountButton_
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
          onUpdate={decrement}
        >
          {useMemo(
            () => (
              <GrFormDown />
            ),
            [],
          )}
          <GrFormDown />
        </CountButton_>
      </div>
    </div>
  );
}

export default memo(Counter);
