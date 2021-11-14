import Axios from "axios";

export const getProducts = async () => {
  return await Axios.get("https://fakestoreapi.com/products")
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const getProduct = async (id) => {
  return await Axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res)
    .catch((err) => console.log(err));
};
