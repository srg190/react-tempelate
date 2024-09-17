import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@src/redux/slices/userSlice";
import productReducer from "@src/redux/slices/productSlice"

export const store = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      product: productReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];