import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAllItems = createAsyncThunk(
  "allItems/loadAllItems",
  async (limit) => {
    const result = await axios.get(
      `https://burgry-server.vercel.app/allItems?limit=${limit?.limit}&category=${limit?.selectCategory}`
    );
    return result.data;
  }
);

const alItemSlice = createSlice({
  name: "allItems",
  initialState: {
    loading: false,
    allItems: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(loadAllItems.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadAllItems.fulfilled, (state, action) => {
      state.loading = false;
      state.allItems = action.payload;
    });
    builder.addCase(loadAllItems.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default alItemSlice.reducer;
