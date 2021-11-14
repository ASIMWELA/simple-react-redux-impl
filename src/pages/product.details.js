import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  setProduct,
  removeSelectedProduct,
} from "../redux/actions/product.actions";
import { getProduct } from "../service/ProductService";
import { useDispatch } from "react-redux";

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProduct = () => {
    getProduct(productId).then((res) => {
      console.log(res);
      dispatch(setProduct(res.data));
    });
  };

  useEffect(() => {
    fetchProduct();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, fetchProduct]);

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment"></div>
    </div>
  );
}

export default ProductDetails;
