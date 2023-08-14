import { ActionTypes } from "../contains/action-types";

const initialState = {
  products: [],
};

// export const productReducer=(state=initialState,action)=>{ here instead of acton im destructuring the action as {type and payload} which are in my action file
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return { ...state };
  }
};


export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};