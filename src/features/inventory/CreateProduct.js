import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, selectAllProducts } from '../allProducts/productSlice';

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    brand: '',
    category: '',
  });
  const allProducts = useSelector(selectAllProducts);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateId = (allProducts)=>{
    const lastId = allProducts.length;
    setNewProduct((prevState)=>({
        ...prevState,
        id: lastId+1
    }))
    console.log(lastId);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    generateId(allProducts);
    
    dispatch(createProduct(newProduct));
  };

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add a Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
