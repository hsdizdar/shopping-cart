import { combineReducers } from '@reduxjs/toolkit';

import shopCartReducer from './shopCartReducer';

const rootReducer = combineReducers({
  shopCart: shopCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
