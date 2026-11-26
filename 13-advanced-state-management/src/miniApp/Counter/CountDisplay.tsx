import { memo } from 'react';
import S from './style.module.css'
import { useCountStore } from './@store';

function CountDisplay() {

  // TODO(Part 6-2) 스토어에서 count 하나만 선택자로 구독하세요.
  // const count = useCountStore((s)=> {
  //   return s.count;
  // });
  const {count} = useCountStore();
  console.log('🔢 CountDisplay 렌더');

  return (
    <output className={S.output}>{count}</output>
  )
}
export default memo(CountDisplay)
