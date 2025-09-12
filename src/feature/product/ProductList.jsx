import { useNavigation } from "react-router-dom";
import ProductCard from "../../component/ui/ProductCard";
import Loading from "../../component/ui/Loading";

function ProductList({ products }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.ID} />
      ))}
    </div>
  );
}

export default ProductList;
