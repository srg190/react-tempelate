import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductResponse } from "./types";

interface InitialState extends ProductResponse {
  loading: boolean;
  error: string;
  message: string;
}
const initialState: InitialState = {
  products: [] as Product[],
  total: 0,
  skip: 0,
  limit: 0,
  loading: false,
  error: "",
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_args, thunkAPI) => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          error: error.response?.data?.message as string,
        });
      } else {
        return "An error occurred";
      }
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
    clearMessage(state) {
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<ProductResponse>) => {
          state.loading = false;
          state.products = action.payload.products;
          state.total = action.payload.total;
          state.skip = action.payload.skip;
          state.limit = action.payload.limit;
        }
      )
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { error: string })?.error ||
          "Failed to fetch products.";
      });
  },
});

export const { clearError, clearMessage } = productSlice.actions;

export default productSlice.reducer;