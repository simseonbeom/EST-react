import { memo } from "react";

type Props = {
  items: string[];
};

function Child({ items }: Props) {
  console.log('🔁 Child 렌더링');
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
export default memo(Child)