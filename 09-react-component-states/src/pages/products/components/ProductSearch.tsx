import { useId } from "react";


interface Props {
  searchTerm: string;
  onSearch: (userInput: string) => void;
}


function ProductSearch({ searchTerm, onSearch }: Props) {

  const id = useId();

  // 입력할 때마다 부모의 상태를 업데이트 (제어 컴포넌트)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value);

  return (
    <div className="ProductSearch">
      <label htmlFor={id}>상품 검색</label>
      <input
        id={id}
        type="search"
        placeholder="상품 이름 입력"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
export default ProductSearch;
