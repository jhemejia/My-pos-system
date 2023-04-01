import React from 'react';
import Styles from '../../Styles/styles.module.scss'
import { useDispatch } from 'react-redux';
import { createProduct } from '../allProducts/productSlice';
import { useCategories } from '../../hooks/useCategories';
import useNewProduct from '../../hooks/useNewProduct';

const CreateProduct = () => {
  const { newProduct, handleInputChange } = useNewProduct();
  const {categories} = useCategories();  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(newProduct));
  };

  return (
    <div className={Styles.addProduct}>
      <form onSubmit={handleSubmit}>
        <div className="newProductFormInputs">

        <div className={Styles.addProductInput}>
          <label>
          Title:
              </label>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            />
            </div>
            <div className={Styles.addProductInput}>
        <label >
          Description:
          </label>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            />
       </div>
       <div className={Styles.addProductInput}>
        <label>
          Price:
          </label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            />
      </div>
      <div className={Styles.addProductInput}>
        <label>
          Brand:
          </label>
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            />
      </div>
      <div className={Styles.addProductInput}>
        <label>
          Category:
          </label>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            defaultValue="Please Select Category"
            >
              <option key="0" value="" disabled >Please Select Category</option>
              { categories?.map((category, index)=>{
    return (
      <option key={index} value={category}>{category.charAt(0).toUpperCase()+ category.slice(1)}</option>
      )
    })} 
            </select>
      </div>
            </div>
            <div className="newProductSubmit">
        <input type="submit" value="Add a Product"/>
            </div>
      </form>
    </div>
  );
};

export default CreateProduct;
