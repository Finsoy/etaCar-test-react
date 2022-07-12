import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/axionClient';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

type responseType = {
  data: cryptocurrencyType;
};

const getCryptocurrencyByIdThunk = createAsyncThunk(
  'currencies/getCurrencyById',
  async (id: string, thunkAPI) => {
    try {
      const response = await client.get<responseType>(`/assets/${id}`);
      return response.data.data;
    } catch (e) {
      console.warn(e);
    }
  },
);

export default getCryptocurrencyByIdThunk;
