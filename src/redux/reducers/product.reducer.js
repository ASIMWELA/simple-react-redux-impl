import { actionTypes } from "../constants/index";

const initialState = {
  products: [],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const seletedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
