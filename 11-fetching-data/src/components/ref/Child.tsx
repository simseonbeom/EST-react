// import type { Ref } from "react";

interface Props {
  placeholder: string;
}

// function Child({ ref, placeholder }: Props) {
//   console.log(ref);

//   return <input ref={ref} type="text" placeholder={placeholder} />;
// }
// export default Child;


// 비교용: React 18 이하 방식 (Child.tsx 아래 주석에 남겨 둠)
import { forwardRef } from "react";

const Child = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
  return <input ref={ref} type="text" placeholder={placeholder} />
})

export default Child