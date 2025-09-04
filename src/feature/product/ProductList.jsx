import ProductCard from "../../component/ui/ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.ID} />
      ))}
    </div>
  );
}

export default ProductList;
