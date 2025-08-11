import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Count",
  initialState: { value: 0 },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    rnd: (state) => {
      state.value += Math.trunc(Math.random() * 100) + 1;
    },
    cls: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { inc, dec, rnd, cls, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
