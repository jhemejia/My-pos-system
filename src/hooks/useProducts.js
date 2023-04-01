import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts,isLoadingProducts } from "../features/allProducts/productSlice";

export  function useProducts () {
    const isLoading = useSelector(isLoadingProducts)
    const allProducts = useSelector(selectAllProducts);
    const dispatch = useDispatch();
 
    useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

return {
    isLoading,
    allProducts
}

}
