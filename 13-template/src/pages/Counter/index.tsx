import Divider from "@/components/Divider";
import Counter_ from "@/miniApp/Counter/index_";

function CounterPage() {
  return (
    <>
      <title>카운터</title>

      <section id="page">
        <div className="learn">
          <h1>카운터</h1>
          <p>같은 카운터를 커스텀 훅 · useReducer · Zustand로 만들어 비교합니다.</p>

          <Divider />

          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>

          <Counter_ />

        </div>
      </section>
    </>
  );
}

export default CounterPage;
