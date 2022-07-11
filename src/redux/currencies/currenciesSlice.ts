import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';
import { RootState } from '../store';

interface currenciesState {
  portfolio: portfolioCurrencyType[];
  portfolioValue: number;
  purchasedPortfolioValue: number;
  cryptocurrencies: cryptocurrencyType[];
}

const initialState: currenciesState = {
  portfolio: [],
  portfolioValue: 0,
  purchasedPortfolioValue: 0,
  cryptocurrencies: [],
};

type buyCurrencyPayload = {
  quantity: number;
  price: number;
  symbol: string;
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    buy: (state, { payload }: PayloadAction<buyCurrencyPayload>) => {
      const purchasedPrice = payload.price * payload.quantity;

      const newItem: portfolioCurrencyType = {
        purchasedPrice,
        price: payload.price,
        symbol: payload.symbol,
        quantity: payload.quantity,
      };

      return {
        ...state,
        portfolio: [...state.portfolio, newItem],
        purchasedPortfolioValue: state.purchasedPortfolioValue + newItem.purchasedPrice,
        portfolioValue: state.portfolioValue + newItem.purchasedPrice,
      };
    },

    refreshPortfolioValue: (state, action: PayloadAction<number>) => {
      return { ...state, portfolioValue: action.payload };
    },

    setCryptocurrencies: (state, action: PayloadAction<cryptocurrencyType[]>) => {
      return { ...state, cryptocurrencies: action.payload };
    },
  },
});

export const { buy, refreshPortfolioValue, setCryptocurrencies } = currenciesSlice.actions;

export const selectCryptocurrencies = (state: RootState) => state.currencies.cryptocurrencies;
export const selectPortfolioValue = (state: RootState) => state.currencies.purchasedPortfolioValue;
export const selectPurchasedPortfolioValue = (state: RootState) => state.currencies.portfolioValue;
export const selectPortfolio = (state: RootState) => state.currencies.portfolio;

export default currenciesSlice.reducer;
