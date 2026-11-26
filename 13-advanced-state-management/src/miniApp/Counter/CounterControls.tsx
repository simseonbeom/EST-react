import { memo } from 'react';
import { useCountStore } from './@store';
import { useShallow } from 'zustand/shallow';

// Counter 바깥에 있는 컨트롤 — Counter와 props로 연결되어 있지 않습니다.
function CounterControls() {

  // TODO(Part 6-4) 스토어의 reset을 꺼내 오세요.
  //  const reset = useCountStore((s) => s.reset);

  // TODO(Part 7-2) 스토어의 step · setStep을 꺼내 오세요.
  // const step = 1;
  // const setStep = (_newStep: number) => {};
  const [step, reset, setStep] = useCountStore(
    useShallow((s) => [s.step, s.reset, s.setStep])
  );

  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        onClick={reset}
        className="px-3 py-1 border border-accent rounded-xs"
      >
        reset
      </button>
      <label className="text-sm text-slate-700">
        step{' '}
        <input
          type="number"
          min={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="border border-accent px-2 py-1 w-20"
        />
      </label>
    </div>
  )
}

export default memo(CounterControls)
