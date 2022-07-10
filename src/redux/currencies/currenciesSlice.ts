import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface currenciesState {
  value: number;
}

const initialState: currenciesState = {
  value: 0,
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    buy: (state, action: PayloadAction<any>) => {},
  },
});

export default currenciesSlice.reducer;
