import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./slices/system/systemSlice";
import categoriesReducer from "./slices/categories/categoriesSlice";
import productsReducer from "./slices/products/productsSlice";
import itemsReducer from "./slices/items/itemsSlice";
import userReducer from "./slices/user/userSlice";

const store = configureStore({
  reducer: {
    system: systemReducer,
    categories: categoriesReducer,
    products: productsReducer,
    items: itemsReducer,
    user: userReducer,
  },
});
export default store;
