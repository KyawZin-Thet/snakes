import { snakesData } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  isLoading: boolean;
  items: snakesData[];
  error: Error | null;
}

const initialState: initialState = {
  isLoading: false,
  items: [],
  error: null,
};

export const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setSnakes: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setSnakes } = snakeSlice.actions;

export default snakeSlice.reducer;
