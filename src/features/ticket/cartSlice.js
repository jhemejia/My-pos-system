import { createSlice } from '@reduxjs/toolkit';

  const initialCart = {cartItems:[], taxRate:0.07};
  const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart, 
    reducers: {
      addItem: (state, action) => {
        const { title, price } = action.payload;
        let itemInCart = state.cartItems.find((item)=>item.title ===title);     
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
       if (itemInCart){
        itemInCart.quantity += 1
       } else {
         const newItem = { title, price, quantity : 1};
             // Add the new item to the cart (or replace it if it existed already)
           state.cartItems.push(newItem)
       }   
      }, 
      removeItem: (state, action)=>{
        const { title } = action.payload;
         state.cartItems.find((item)=>item.title !==title);     
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
       
      },
      incrementQuantity: (state, action) => {
        const { title } = action.payload;
        let itemInCart = state.cartItems.find((item)=>item.title === title);     
        if (itemInCart){
          itemInCart.quantity +=1
         }
      },
      decrementQuantity: (state, action) => {
        const { title } = action.payload;
        let itemInCart = state.cartItems.find((item)=>item.title === title);     
        if (itemInCart.quantity>0){
          itemInCart.quantity -=1
         }
      },
     
    }
  });

  export const { addItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
  export default cartSlice.reducer;
  export const selectCartItems = (state)=> state.cart;
  export const selectVAT = (state) => state.cart.taxRate;
