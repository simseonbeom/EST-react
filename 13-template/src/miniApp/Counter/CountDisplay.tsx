import { memo } from 'react';
import S from './style.module.css'

function CountDisplay() {

  const count = 0;

  return (
    <output className={S.output}>{count}</output>
  )
}
export default memo(CountDisplay)
