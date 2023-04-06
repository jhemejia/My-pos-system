import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './features/allProducts/productSlice';
import cartReducer from './features/ticket/cartSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    allProducts: productReducer, 
    cart: cartReducer,
    currentUser: authReducer    
  },
  middleware: [thunk]    
});

