import { memo } from 'react';

function CounterControls() {

  const reset = () => {};

  const step = 1;
  const setStep = (_newStep: number) => {};

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
