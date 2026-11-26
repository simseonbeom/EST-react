/*
카운터 페이지 — 같은 카운터를 커스텀 훅 · useReducer · Zustand로 만들어 나란히 비교합니다.
주석 처리된 섹션은 해당 Part에서 주석을 풀어 화면에 붙입니다.
*/

import Divider from "@/components/Divider";
import S from "@/miniApp/Counter/style.module.css";
import useCounter from "@/hook/useCounter";
import CountDisplay_ from "@/miniApp/Counter/CountDisplay_";
import Counter_ from "@/miniApp/Counter/index_";
import CounterReducer from "@/miniApp/CounterReducer";
import { useCountStore } from "@/miniApp/Counter/@store";
import Counter from "@/miniApp/Counter";
import CounterControls from "@/miniApp/Counter/CounterControls";
// Part 2-1에서 주석 해제
// import CounterReducer from "@/miniApp/CounterReducer";
// Part 6-2에서 주석 해제
// import Counter from "@/miniApp/Counter";
// Part 6-4에서 주석 해제
// import CounterControls from "@/miniApp/Counter/CounterControls";

function CounterPage() {
  // const { count, increment, reset } = useCounter();
  const count = useCountStore((s) => s.count);
  const increment = useCountStore((s) => s.increment);

  return (
    <>
      <title>카운터</title>

      <section id="page">
        <div className="learn">
          <h1>카운터</h1>
          <p>
            같은 카운터를 커스텀 훅 · useReducer · Zustand로 만들어 비교합니다.
          </p>

          <Divider />

          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>

          <Counter_ />

          <Divider />

          <h2 lang="en" className="uppercase">Counter Reducer</h2>
          <p>카운터의 상태를 useReducer를 사용해 관리합니다.</p>

          <CounterReducer />

          <Divider></Divider>

          <p>스토어 count: {count} <button onClick={increment}>[+1]</button></p>
         

          <Divider />

          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 Zustand를 사용해 관리합니다.</p>

          <Counter className="mb-3" />
          <Counter className="mb-3" />
         

          {/* Part 6-4에서 주석 해제 */}
          <CounterControls />
         
        </div>
      </section>
    </>
  );
}

export default CounterPage;
