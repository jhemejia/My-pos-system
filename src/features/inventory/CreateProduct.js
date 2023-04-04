import React from 'react';
import Styles from '../../Styles/styles.module.scss'
import { useDispatch } from 'react-redux';
import { createProduct, fetchProducts } from '../allProducts/productSlice';
import { useCategories } from '../../hooks/useCategories';
import useNewProduct from '../../hooks/useNewProduct';
import { newProductSchema } from '../../Validations/NewProductValidation';


const CreateProduct = () => {
  const { newProduct, handleInputChange, resetNewProductForm } = useNewProduct();
  const {categories} = useCategories();  
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = await newProductSchema.isValid(newProduct);
   
    if (isValid) {
      dispatch(createProduct(newProduct));
      dispatch(fetchProducts());     
      alert("New Product has been created!")
      resetNewProductForm();
    } else {
      alert("Error: Please review your inputs!")
    }
  };

  return (
    <div className={Styles.addProduct}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.newProductFormInputs}>

        <div className={Styles.addProductInputDiv}>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            className={Styles.allInputs}
            placeholder='Title'
            required
            />
          <label className={Styles.labels}>
          Title
              </label>
            </div>
            <div className={Styles.addProductInputDiv}>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className={`${Styles.allInputs} ${Styles.description}`}
            placeholder='Description'
            required
            />
        <label className={Styles.labels}>
          Description
          </label>
       </div>
       <div className={Styles.addProductInputDiv}>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className={Styles.allInputs}
            placeholder='Price'
            required
            />
        <label className={Styles.labels}>
          Price
          </label>
      </div>
      <div className={Styles.addProductInputDiv}>
        
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            className={Styles.allInputs}
            placeholder='Brand'
            required
            />
            <label className={Styles.labels}>
          Brand
          </label>
      </div>
      <div className={Styles.addProductInputDiv}>
        
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            className={Styles.allInputs}
            required
            >
              <option key="0" value="" disabled >Please Select Category</option>
              { categories?.map((category, index)=>{
    return (
      <option key={index} value={category}>{category.charAt(0).toUpperCase()+ category.slice(1)}</option>
      )
    })} 
    
            </select>
            <label className={Styles.labels}>
          Category: 
          </label>
      </div>
            </div>
            <div className={Styles.newProductSubmit}>
        <input type="submit" value="Add a Product"/>
            </div>
      </form>
    </div>
  );
};

export default CreateProduct;
