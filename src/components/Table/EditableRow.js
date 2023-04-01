import React, { useState } from 'react';
import Styles from '../../Styles/styles.module.scss'
import useField from '../../hooks/useField';
import { useCategories } from '../../hooks/useCategories';
import { useDispatch } from "react-redux";
import { updateProduct } from '../../features/allProducts/productSlice';

const EditableRow = ({product, handleClickCancel}) =>{
    const productId = useField({type:'text', initialState: product.id})
    const productTitle = useField({type:'text', initialState: product.title})
    const productDescription = useField({ initialState: product.description})
    const productPrice = useField({type:'number', initialState: product.price})
    const productBrand = useField({type:'text', initialState: product.brand})
    const {categories} = useCategories();
    const [ category, setCategory ] = useState();
    const dispatch = useDispatch();

    const saveChanges = ()=>{
      dispatch(updateProduct({
        id:productId.value,
        title: productTitle.value,
        description: productDescription.value,
        price: productPrice.value,
        brand: productBrand.value,
        category: category
      }))
    }

   return (
        <tr className={Styles.editableRow} key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.images? product.images[0]:''} alt={product.title} /></td>
              <td><input {...productTitle} name="productTitle"   /></td>
              <td><textarea {...productDescription} name="productDescription"   /></td>
              <td><input {...productPrice} name="productPrice"   /></td>
              <td><input {...productBrand} name="productBrand"   /></td>
              <td><select onChange={(e)=>setCategory(e.target.value)}>
              {categories?.map((category, index)=>{
    return (
      <option key={index} value={category}>{category.charAt(0).toUpperCase()+ category.slice(1)}</option>
      )
    })} 
    </select></td>
              <td><div className={Styles.actionButton}><input type="submit" value="Save" onClick={saveChanges}/> <input type="button" value="Cancel" onClick={handleClickCancel}/></div></td>
          </tr>
    )

}
export default EditableRow;
 
