import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/loadData',
  async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    return json;
  }
)
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, title, description, price, brand, category })=>{
    try {

      const data = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PATCH', /* or PUT */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          description: description ,
          price: price, 
          brand: brand, 
          category: category
        })
      });
      const json = data.json();
      return json;
    } catch(error){
      throw new Error(`${error.message}`)
    }
  }
)
export const deleteProduct  = createAsyncThunk(
  'products/deleteProduct ',
  async (productId)=>{
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to delete product.');
      }
    } catch (error) {
      console.error(error);
    }
  }
)

export const createProduct = createAsyncThunk(
  'products/createProduct ',
   async(productData) => {
     try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        fetchProducts();
      } else {
        throw new Error('Unable to create product.');
      }
    } catch (error) {
      console.error(error);
    }
  });

const initialInventory = { 
  inventory:[], 
  isLoading: false, 
  hasError: false, 
  searchTerm: '',
  filterOption: 'all',
};
const options = {
  name: 'products',
  initialState: initialInventory,
  reducers: {
      filterProducts: (state, action) => {
      const { searchTerm, filterOption} = action.payload; 
      state.searchTerm = searchTerm ;
      state.filterOption = filterOption;
      },
      setProducts: (state, action) => {
        state.inventory = action.payload;
      }
     
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.inventory= action.payload;  
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    })
    .addCase(updateProduct.pending, (state, action)=>{
      state.hasError = false;
      state.isLoading = true;
    })
    .addCase(updateProduct.fulfilled, (state, action)=>{
      const {id} = action.payload;
      state.isLoading = false;
      state.hasError = false;
      state.inventory.products.splice(id-1, 1, action.payload);
    })
    .addCase(updateProduct.rejected, (state, action)=>{
      state.hasError = true;
      state.isLoading = false;
    })
    .addCase(deleteProduct.pending, (state, action)=>{
      state.hasError = false;
      state.isLoading = true;
    })
    .addCase(deleteProduct.fulfilled, (state, action)=>{
      const { id } = action.payload;
      state.isLoading = false;
      state.hasError = false;
      state.inventory.products = state.inventory.products.filter(product=>{
        return product.id !== id;
      }) 
    })
    .addCase(deleteProduct.rejected, (state, action)=>{
      state.hasError = true;
      state.isLoading = false;
    })
  }
};

const productsSlice = createSlice(options);
export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const selectAllProducts = (state)=> state.allProducts;
export const isLoadingProducts = (state)=> state.allProducts.isLoading;