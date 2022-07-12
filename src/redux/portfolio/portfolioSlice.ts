import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

interface currenciesState {
  portfolio: portfolioCurrencyType[];
  portfolioValue: number;
  purchasedPortfolioValue: number;
}

const initialState: currenciesState = {
  portfolio: [],
  portfolioValue: 0,
  purchasedPortfolioValue: 0,
};

type buyCurrencyPayload = {
  quantity: number;
  price: number;
  symbol: string;
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    buy: (state, { payload }: PayloadAction<buyCurrencyPayload>) => {
      const purchasedPrice = payload.price * payload.quantity;

      const newItem: portfolioCurrencyType = {
        id: uuidv4(),
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

    remove: (state, action: PayloadAction<portfolioCurrencyType>) => {
      return {
        ...state,
        portfolio: [...state.portfolio].filter((item) => item.id !== action.payload.id),
        purchasedPortfolioValue: state.purchasedPortfolioValue - action.payload.purchasedPrice,
        portfolioValue: state.portfolioValue - action.payload.purchasedPrice,
      };
    },
    refreshPortfolioValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        portfolioValue: action.payload,
        purchasedPortfolioValue: state.portfolio.length > 0 ? state.purchasedPortfolioValue : 0,
      };
    },
  },
});

export const { buy, refreshPortfolioValue, remove } = portfolioSlice.actions;

export const selectPortfolio = (state: RootState) => state.portfolio;

export default portfolioSlice.reducer;
