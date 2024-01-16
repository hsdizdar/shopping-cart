import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ShopCartType } from 'screens/shopping-cart/ShoppingCart.types';

interface ShopCartState {
  items: ShopCartType[];
}

const initialState: ShopCartState = {
  items: [],
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
});

export const { addToCart, removeFromCart } = shopCartSlice.actions;

export default shopCartSlice.reducer;
