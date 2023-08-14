import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListning = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((error) => {
        console.log("error", error);
      });
    //   here we are dispatching/storing the data in redux(action) libraray so that we can  use it throught our application
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  console.log("products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListning;
