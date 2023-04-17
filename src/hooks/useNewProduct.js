import { useState } from 'react'

const useNewProduct = (productsLength) => {
    const [newProduct, setNewProduct] = useState({
      id: productsLength+1
    });

  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const setImageUrl = (url)=>{
      setNewProduct((prevState) => ({
        ...prevState,
        image: url,
      }));
    }
    const resetNewProductForm = ()=>{
      setNewProduct({})
    }
  return (
  {
    newProduct,
    handleInputChange,
    resetNewProductForm,
    setImageUrl
  }
  )
}

export default useNewProduct
