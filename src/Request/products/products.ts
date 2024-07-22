import { axiosInstance } from "../axios";

export const getProducts = async () => {
  try {
    const products = await axiosInstance("/get/all/products");
    return products.data;
  } catch (error) {
    return error;
  }
};
export const getBrands = async () => {
  try {
    const brands = await axiosInstance("/get/brands");
    return brands.data;
  } catch (error) {
    return error;
  }
};
