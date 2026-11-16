import { useState } from "react";
import { productData } from "./data";

import "./ProductPage.css";
import ProductSearch from "./components/ProductSearch";
import StockFilter from "./components/StockFilter";
import ProductList from "./components/ProductList";
import ProductCount from "./components/ProductCount";


/* ProductSearch, StockFilter, ProductList, ProductItem, ProductCount */


function ProductPage() {

  // 상태 선언
  const [products] = useState(productData);
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // 상태 업데이트
  const handleSearch = (userInput: string) => setSearchTerm(userInput)
  const handleToggleStock = () => setOnlyInStock(!onlyInStock)


  // 파생된 상태
  // 조건 1. 이름에 검색어가 포함되어 있는가?
  // 조건 2. 재고만 보기가 켜져 있다면, 재고가 있는가?
  // 두 조건을 모두 만족(&&)하는 상품만 남긴다.
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.includes(searchTerm.trim());
    const matchesStock = onlyInStock ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  // [마크업 (JSX)] -----------------------------------------------
  return (
    <div className="ProductPage">
      <h1>상품 목록</h1>

      <ProductSearch searchTerm={searchTerm} onSearch={handleSearch} />

      <StockFilter onlyInStock={onlyInStock} onToggle={handleToggleStock} />

      <ProductList products={filteredProducts} />

      <ProductCount count={filteredProducts.length} total={products.length} />
    </div>
  );
}
export default ProductPage;
