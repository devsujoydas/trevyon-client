import { useState, useEffect } from "react";
import api from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productloading, setProductLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setProductLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, productloading };
};

export default useProducts;
