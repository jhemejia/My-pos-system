import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './features/allProducts/productSlice';
import cartReducer from './features/ticket/cartSlice';

export const store = configureStore({
  reducer: {
    allProducts: productReducer, 
    cart: cartReducer    
  },
  middleware: [thunk]    
});

