import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "./IProduct";
import { productAPI } from "./ProductAPI";


function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await productAPI.list();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}

export default ProductList;
