import CountButton from './CountButton';
import CountDisplay from './CountDisplay';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import S from  './style.module.css';
import { memo, useMemo } from 'react';
import tw from '@/utils/tw';

function Counter({className}:{className?:string}) {

  return (
    <div className={tw(S.component,className)}>
      <CountDisplay />

      <div role="group" className={S.group}>
        <CountButton title="1 증가" aria-label="1 증가">
          {useMemo(() => <GrFormUp />, [])}
        </CountButton>

        <CountButton type="-" title="1 감소" aria-label="1 감소">
          {useMemo(() => <GrFormDown />, [])}
        </CountButton>
      </div>
    </div>
  )
}

export default memo(Counter)
