import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/axionClient';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

type responseType = {
  data: cryptocurrencyType[];
};

const getAllCryptocurrenciesThunk = createAsyncThunk(
  'currencies/getAllCryptocurrencies',
  async (_, thunkAPI) => {
    try {
      const response = await client.get<responseType>('/assets');
      return response.data.data;
    } catch (e) {
      console.warn(e);
    }
  },
);

export default getAllCryptocurrenciesThunk;
