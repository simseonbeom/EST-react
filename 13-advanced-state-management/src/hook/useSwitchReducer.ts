/*
TODO(Part 10-5) useSwitch와 공개 API는 똑같이, 내부만 useReducer로 바꾸세요.
  1. Action 타입: { type: 'SET'; payload: boolean } | { type: 'TOGGLE' }
  2. reducer(state, action): SET → payload, TOGGLE → !state
  3. useState 대신 useReducer(reducer, defaultChecked)
  4. 다 만들었으면 src/miniApp/Switcher/Switch.tsx의 import를 이 파일로 바꾸기
*/

import { useId } from "react";


type UseSwitchOptions = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  id?: string;
  disabled?: boolean;
};


export function useSwitch(opts: UseSwitchOptions = {}) {
  const {
    defaultChecked = false,
    checked,
    onChange,
    id,
    disabled = false,
  } = opts;

  const reactId = useId();

  const isChecked = false;
  const setChecked = (_next: boolean) => {};
  const toggle = () => {};

  // ✅ 예열 완료 — 접근성: 버튼 패턴(role="switch") + 키보드 조작
  const a11yProps = {
    id: id ?? reactId,
    role: "switch" as const,
    "aria-checked": isChecked,
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "ArrowLeft") setChecked(false);
      if (e.key === "ArrowRight") setChecked(true);
    },
    onClick: () => toggle(),
  };

  return { checked: isChecked, setChecked, toggle, a11yProps, disabled };
}
