import { createSlice } from '@reduxjs/toolkit';

export type CounterSlice = {
  value: number;
};

const initialState: CounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increaseCounter: ({ value }) => ({ value: value + 1 }),
    decreaseCounter: ({ value }) => ({ value: value - 1 }),
  },
});

export default counterSlice.reducer;

export const { increaseCounter, decreaseCounter } = counterSlice.actions;
