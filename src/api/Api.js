import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(baseUrl + "/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(baseUrl + "/products/categories");
    const categories = response.data;
    const iconMap = {
      electronics: require("../../assets/images/electronics.jpg"),
      jewelery: require("../../assets/images/jwellery.jpg"),
      "men's clothing": require("../../assets/images/men.png"),
      "women's clothing": require("../../assets/images/women.jpg"),
    };
    return categories.map((name, index) => ({
      id: index + 1,
      name,
      imageUrl: iconMap[name.toLowerCase()],
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(baseUrl + "/products");
    const products = response.data;
    return products.map((product) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.image,
      category: product.category,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
