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
      const newArr = response.data.data;
      // reduce some data for better readability in chart
      return newArr
        .filter((item: any, index: number) => index % 2 === 0)
        .filter((item: any, index: number) => index % 2 === 0)
        .filter((item: any, index: number) => index % 2 === 0)
        .filter((item: any, index: number) => index % 2 === 0);
    } catch (e) {
      console.warn(e);
    }
  },
);

export default getHistoryOfCurrencyThunk;
