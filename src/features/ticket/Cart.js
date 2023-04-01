import React, { useState } from "react";
import Styles from '../../Styles/styles.module.scss';
import {incrementQuantity, decrementQuantity, selectVAT, selectCartItems } from './cartSlice.js';
import { useDispatch, useSelector } from "react-redux";


export const Cart = ()=>{
    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);  
    const taxRate = useSelector(selectVAT);
    const [discount, setDiscount] = useState(0);


   const handleChange = ({target})=>{
    const discountValue = parseFloat(target.value).toFixed(2);
    setDiscount(discountValue);
    
  }
   const handleIncrement = (item)=>{
     dispatch(incrementQuantity(item))
  }
   const handleDecrement = (item)=>{
    dispatch(decrementQuantity(item))
  }
  
  const calculateTotalAmount = ()=>{
    let total=[];
  for (let item of cart.cartItems){
         total.push(item.price * item.quantity) };
         total = total.reduce((a, b)=> a+b,0)     
    let taxes= total*taxRate;
         total = total - discount + taxes;
         total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
         taxes = taxes.toFixed(2);
        return {total: total, VAT: taxes}
  }
  const cartTotal = calculateTotalAmount();

return (
   <div className={Styles.sidebar} >
      <h2>Sales Ticket</h2>
      <div className={Styles.productList}>
      <table className={Styles.cartTable}> 
        <tbody>
          <tr className={Styles.cartTable__th}>
            <th>Name</th><th>Quantity</th><th>Price</th>
          </tr>
      {cart.cartItems.map((item,index)=>{
        if (item.quantity===0){
          // eslint-disable-next-line
          return;
        }
        return (
          <tr className={Styles.cartTable__row} key={index}>

          <td>{item.title}</td>
          <td> 
          <button onClick={()=>handleIncrement(item)}>+</button>
          <span>
            {item.quantity} 
          </span>
          <button onClick={()=>handleDecrement(item)}>-</button>
          </td>
          <td>{item.price}</td>
          </tr>
        )
      })}
      </tbody>
      </table>
      </div>
      <div className={Styles.cartBottom}>
        <div className={Styles.cartDiscount}>
          <span>Discount</span>
          <label htmlFor="discount">$</label>
          <input id="discount" type="number" step='0.01' placeholder='0.00' value={discount}  onChange={handleChange}/> 
        </div>
        <div className={Styles.cartVAT}>
          <span>VAT (7%)</span>
          <label htmlFor="taxes">$</label>
          <input id="taxes" type="text" value={cartTotal.VAT} readOnly/>
        </div>
        <div className={Styles.totalCart}>
          <h3>
            Total {' '}
            <span>
              {cartTotal.total}
            </span>
          </h3>
        </div>
      </div>
          
    </div>
);
} 