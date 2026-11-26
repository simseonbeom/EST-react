import { GrFormDown, GrFormUp } from 'react-icons/gr';
import S from  './style.module.css';
import { memo } from 'react';
import tw from '@/utils/tw';
import CountButton_ from './CountButton_';
import CountDisplay_ from './CountDisplay_';

function Counter({className}:{className?:string}) {

  return (
    <div className={tw(S.component,className)}>
      <CountDisplay_ count={0} />

      <div role="group" className={S.group}>
        <CountButton_ title="1 증가" aria-label="1 증가" onUpdate={() => {}}>
          <GrFormUp />
        </CountButton_>

        <CountButton_ title="1 감소" aria-label="1 감소" onUpdate={() => {}}>
          <GrFormDown />
        </CountButton_>
      </div>
    </div>
  )
}

export default memo(Counter)
