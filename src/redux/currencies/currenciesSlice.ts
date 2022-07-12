import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';
import getAllCryptocurrenciesThunk from '../thunks/getAllCryptocurrencies.thunk';

interface currenciesState {
  cryptocurrencies: cryptocurrencyType[];
  isLoadingCryptocurrencies: boolean;
}

const initialState: currenciesState = {
  cryptocurrencies: [],
  isLoadingCryptocurrencies: false,
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCryptocurrencies: (state, action: PayloadAction<cryptocurrencyType[]>) => {
      return { ...state, cryptocurrencies: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCryptocurrenciesThunk.pending, (state) => {
      state.isLoadingCryptocurrencies = true;
    });

    builder.addCase(getAllCryptocurrenciesThunk.fulfilled, (state, action) => {
      state.isLoadingCryptocurrencies = false;
      state.cryptocurrencies = action.payload!;
    });

    builder.addCase(getAllCryptocurrenciesThunk.rejected, (state) => {
      state.isLoadingCryptocurrencies = false;
    });
  },
});

export const { setCryptocurrencies } = currenciesSlice.actions;

export const selectCurrencies = (state: RootState) => state.currencies;

export default currenciesSlice.reducer;
