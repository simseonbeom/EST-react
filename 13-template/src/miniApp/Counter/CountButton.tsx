import { memo } from 'react';
import S from './style.module.css'

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: '+' | '-';
};

function CountButton({ children, type = '+', ...restProps }: Props) {

  const handler = () => {};

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
