import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';
import { RootState } from '../store';
import getAllCryptocurrenciesThunk from '../thunks/getAllCryptocurrencies.thunk';
import getCryptocurrencyByIdThunk from '../thunks/getCryptocurrencyById.thunk';
import getHistoryOfCurrencyThunk from '../thunks/getHistoryOfCurrency.thunk';
import { historyOfCurrencyDataType } from '../../types/historyOfCurrencyDataType';

interface currenciesState {
  cryptocurrencies: cryptocurrencyType[];
  isLoadingCryptocurrencies: boolean;
  currentCurrency: cryptocurrencyType;
  isLoadingCurrentCurrency: boolean;
  historyData: historyOfCurrencyDataType;
}

const initialState: currenciesState = {
  cryptocurrencies: [],
  isLoadingCryptocurrencies: false,
  currentCurrency: {
    id: '',
    name: '',
    priceUsd: '',
    changePercent24Hr: '',
    volumeUsd24Hr: '',
    symbol: '',
    supply: '',
    vwap24Hr: '',
    maxSupply: '',
  },
  isLoadingCurrentCurrency: false,
  historyData: [
    {
      date: '',
      priceUsd: '',
      time: 0,
    },
  ],
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

    builder.addCase(getCryptocurrencyByIdThunk.pending, (state, action) => {
      state.isLoadingCurrentCurrency = true;
    });

    builder.addCase(getCryptocurrencyByIdThunk.fulfilled, (state, action) => {
      state.currentCurrency = action.payload!;
      state.isLoadingCurrentCurrency = false;
    });

    builder.addCase(getCryptocurrencyByIdThunk.rejected, (state, action) => {
      state.isLoadingCurrentCurrency = false;
    });

    builder.addCase(getHistoryOfCurrencyThunk.fulfilled, (state, action) => {
      state.historyData = action.payload;
    });
  },
});

export const { setCryptocurrencies } = currenciesSlice.actions;

export const selectCurrencies = (state: RootState) => state.currencies;

export default currenciesSlice.reducer;
