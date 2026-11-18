import { memo } from "react";

type Props = {
  label: string;
  onClick: ()=> void;
};

function Child({label,onClick}:Props) {
  console.log(`Child 렌더링 - label: ${label}`);
  return (
    <>
      <p>{label} </p>
      <button onClick={onClick} type="button">자식 버튼</button>
    </>
  );
}
export default memo(Child)