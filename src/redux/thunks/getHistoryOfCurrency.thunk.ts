import { client } from '../../api/axionClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

type payloadType = {
  id: string;
  interval: string;
};

export const getHistoryOfCurrencyThunk = createAsyncThunk(
  'currencies/getHistoryOfCurrency',
  async (payload: payloadType, thunkAPI) => {
    const { id, interval } = payload;
    try {
      const response = await client.get(`/assets/${id}/history?interval=${interval}`);
      return response.data.data;
    } catch (e) {
      console.warn(e);
    }
  },
);

export default getHistoryOfCurrencyThunk;
