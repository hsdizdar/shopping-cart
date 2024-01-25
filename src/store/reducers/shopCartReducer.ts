import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ShopCartType } from 'screens/shopping-cart/ShoppingCart.types';
import { getShopsAsync } from '../actions/shopCartActions';
import { Shop } from 'services/index';

interface ShopCartState {
  items: ShopCartType[];
  shops: Shop[];
  loading: boolean;
  error: string | null;
}

const initialState: ShopCartState = {
  items: [],
  shops: [],
  loading: false,
  error: null,
};

const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShopCartType>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShopsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getShopsAsync.fulfilled, (state, action: PayloadAction<Shop[]>) => {
        state.loading = false;
        state.shops = action.payload;
      })
      .addCase(getShopsAsync.rejected, (state) => {
        state.loading = false;
        state.error = 'Something wrong';
      });
  },
});

export const { addToCart, removeFromCart } = shopCartSlice.actions;

export default shopCartSlice.reducer;
