export async function getAllproduct() {
  const response = await fetch("https://your-gebeta.onrender.com/api/product");
  if (!response.ok) throw new Error("products not found");
  const data = await response.json();
  if (data.status === "fail") throw new Error("server error");
  return data.data;
}
export async function getProduct(id) {
  const response = await fetch(
    `https://your-gebeta.onrender.com/product/${id}`
  );
  if (!response.ok) throw new Error("products not found");
  const data = await response.json();
  if (data.status === "fail") throw new Error("server error");
  return data.data;
}
