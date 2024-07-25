import axiosClint from "../_utils/axiosClint";

const addToCart = (payload) => axiosClint.post("/carts", payload);
const getCarts = (email) =>
  axiosClint.get(
    `/carts?populate[products][populate]=*&filters[email][$eq]=${email}`
  );
const deleteCart = (id) => axiosClint.delete(`/carts/${id}`);
export { addToCart, deleteCart, getCarts };
