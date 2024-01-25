import { createAsyncThunk } from '@reduxjs/toolkit';

import { getShops } from 'services/index';

export const getShopsAsync = createAsyncThunk('cart/fetchShops', async () => {
  const response = await getShops();
  return response;
});
