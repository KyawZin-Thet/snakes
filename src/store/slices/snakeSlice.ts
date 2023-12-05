import { createSlice } from "@reduxjs/toolkit";

// interface CartState {
//   isLoading: boolean;
//   items: CartItem[];
//   error: Error | null;
// }

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

export const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {},
});

export const {} = snakeSlice.actions;

export default snakeSlice.reducer;
