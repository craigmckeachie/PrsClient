import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "./IProduct";
import { productAPI } from "./ProductAPI";
import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const productCardSkeletons = Array.from(Array(12), (value, index) => {
    return <ProductCardSkeleton key={index} />;
  });

  console.log(products);
  

  async function loadProducts() {
    setLoading(true);
    const data = await productAPI.list();
    setLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function removeProduct(product: IProduct) {
    setProducts(products.filter((p) => p.id !== product.id));
  }

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {loading && productCardSkeletons}

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={removeProduct}
        />
      ))}
    </section>
  );
}

export default ProductList;
