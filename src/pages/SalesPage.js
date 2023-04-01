import { ProductContainer } from '../features/allProducts/ProductContainer';
import { Cart } from '../features/ticket/Cart';
import Styles from '../Styles/styles.module.scss';
import { Spinner } from '../components/Spinner.js';
import { useProducts } from '../hooks/useProducts';
import { addItem } from '../features/ticket/cartSlice';
import { useDispatch } from 'react-redux';

export default function SalesPage() {
 const { isLoading, allProducts} = useProducts();
 const dispatch = useDispatch();
 
  const handleClick = (item) =>{
      dispatch(addItem(item))
  }
  
    return  (
      <div className={Styles.salesPage}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
          <div className="mainContainer">
            <ProductContainer 
            products={allProducts.inventory.products}
            handleClick={handleClick}
            />
          </div>
            <Cart />
          </> )}
    </div>
  );
}