import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: "",
  view: [],
  filter: [],
};

// Generates pending, fulfilled, and rejected action types
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    viewProduct: (state, action) => {
      const item = state.products.filter(
        (prod) => prod.id === action.payload.id
      );
      state.view = item;
    },
    category: (state, action) => {
      if (action.payload !== "all") {
        const filteredProducts = state.products.filter(
          (prod) => prod.category === action.payload
        );
        state.filter = filteredProducts;
      } else {
        state.filter = state.products;
      }
    },
    search: (state, action) => {
      const searchedProduct = state.products.filter((prod) =>
        prod.title.toLowerCase().includes(action.payload)
      );
      if (searchedProduct) {
        state.filter = searchedProduct;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
      state.filter = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
      state.filter = [];
    });
  },
});

export const { viewProduct, category, search } = productsSlice.actions;
export default productsSlice.reducer;
