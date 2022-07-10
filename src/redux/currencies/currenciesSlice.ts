import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';

interface currenciesState {
  portfolio: portfolioCurrencyType[];
}

const initialState: currenciesState = {
  portfolio: [],
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    buy: (state, action: PayloadAction<number>) => {
      console.log(action);
    },
  },
});

export const { buy } = currenciesSlice.actions;

export default currenciesSlice.reducer;
