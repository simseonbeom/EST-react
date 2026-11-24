import type { Database } from "@/supabase/database.types";
import supabase from "@/supabase/supabase";
import { useEffect, useState } from "react";

type ProductRow = Database["public"]["Tables"]["products"]["Row"];
type ProductItem = Pick<
  ProductRow,
  "id" | "name" | "price" | "image_url" | "description" | "sale"
>;

function useProducts() {
  const [products, setProducts] = useState<ProductItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, description, sale");

      if (ignore) return;
      if (data) {
        setProducts(data);
      }
      setLoading(false);
      if (error) {
        console.error("상품 불러오기 실패:", error);
        return null;
      }
    };
    fetchProducts();
    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading };
}

export default useProducts;
