import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../service/ProductService";
import { setProducts } from "../redux/actions/product.actions";
import { Link } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await getProducts().then((res) => res);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = products.map((product) => {
    const { image, id, price, title, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="mata price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="ui grid container">{renderList}</div>;
}
