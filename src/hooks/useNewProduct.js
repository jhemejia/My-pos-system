import { useState } from 'react'

const useNewProduct = () => {
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: '',
        brand: '',
        category: '',
      });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    const resetNewProductForm = ()=>{
      setNewProduct({
        title: '',
        description: '',
        price: '',
        brand: '',
        category: '',
      })
    }
  return (
  {
    newProduct,
    handleInputChange,
    resetNewProductForm
  }
  )
}

export default useNewProduct
