import axiosClint from "../_utils/axiosClint";

const getLatestProducts = () => axiosClint.get("/products?populate=*");

const getProductById = (id) =>
  axiosClint.get(`/products/${id}?populate=*`);

const getProductListByCategory = (category) =>
  axiosClint.get(`/products?filters[category][$eq]=${category}&populate=*`);
const productEndpoint = {
  getLatestProducts,
  getProductById,
  getProductListByCategory,
  
};

export default productEndpoint;
