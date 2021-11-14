import { combineReducers } from "redux";
import { productsReducer, seletedProductReducer } from "./product.reducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: seletedProductReducer,
});

export default reducers;
