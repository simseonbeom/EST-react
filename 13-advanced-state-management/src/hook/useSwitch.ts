import { useId } from "react";

/*
TODO(Part 10-2 ~ 10-4) 제어 / 비제어 모드를 모두 지원하는 Switch 훅을 완성하세요.
  1. useState(defaultChecked)로 내부(비제어) 상태 만들기
  2. checked가 undefined가 아니면 제어 모드 → isChecked 결정
  3. setChecked(next): 비제어일 때만 내부 상태 변경 + onChange 호출
  4. toggle(): disabled면 무시, 아니면 setChecked(!isChecked)
*/

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
