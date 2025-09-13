import { useNavigate, useNavigation } from "react-router-dom";
import ProductCard from "../../component/ui/ProductCard";
import Loading from "../../component/ui/Loading";

function ProductList({ products }) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";
  const user = JSON.parse(localStorage.getItem("user"));

  if (isLoading) {
    return <Loading />;
  }
  if (user.Role === "merchant") {
    navigate("/dashboard");
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
