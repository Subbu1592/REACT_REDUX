// we may have multipke reducers so we gonna combine all the reducers here

import { combineReducers } from "redux";
import { productReducer,selectedProductsReducer } from "./productReducer";

// we can directly assign productreducer to thecombinereducers property as
// const reducers = combineReducers(productReducer)
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
