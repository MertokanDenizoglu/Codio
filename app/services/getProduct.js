import Axios from "./Axios";

 const fetchProducts = async () => {
  try {
    const url = "/products";
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    console.error('GET isteği başarısız oldu:', error);
    throw error;
  }
};
export default fetchProducts;