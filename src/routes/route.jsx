import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../page/Homepage";
import ProductPage from "../feature/product/ProductPage";
import CartPage from "../feature/cart/CartPage";
import NotFoundPage from "../page/NotFoundPage";
import productListLoader from "../feature/product/productListLoader";
import productLoader from "../feature/product/productLoader";
import CheckoutPage from "../page/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage />, loader: productListLoader },
      {
        path: "product/:id",
        element: <ProductPage />,
        loader: productLoader,
      },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
export default router;
