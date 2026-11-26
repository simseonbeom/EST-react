import { memo } from 'react';
import S from './style.module.css'
import { useCountStore } from './@store';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: '+' | '-';
};

function CountButton({ children, type = '+', ...restProps }: Props) {

  // TODO(Part 6-2) props로 핸들러를 받지 않고, type에 따라 스토어의 increment / decrement를 고르세요.
  const handler = useCountStore((s) =>
    type === '+' ? s.increment : s.decrement
  );

  return (
    <button
      type="button"
      className={S.button}
      onClick={handler}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default memo(CountButton)
