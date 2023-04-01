import { Product } from '../../components/Product';
import Styles from '../../Styles/styles.module.scss';
import { useSelector } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';

export const ProductContainer = (props) => {
  const {products, handleClick } = props;
  const {searchTerm , filterOption} = useSelector((state)=>state.allProducts)
  
  const shouldDisplay = (product)=>{
    const matchesSearch = searchTerm === ''? true : Object.values(product).some(val =>{
      if(typeof val === 'string'){
        let value = val.toLowerCase();
        return value.includes(searchTerm.toLowerCase())
      } else if(Array.isArray(val)){
        return val.includes(searchTerm)
      } else {
        return false;
      }
    });
    const matchesCategory = filterOption==='all' ? true : Object.values(product).some(val=>{
      return val===filterOption});
    return matchesCategory && matchesSearch;
  }
const productList = products?.filter(product=>shouldDisplay(product))
  
return (
    <>
      <SearchBar/>
      <div className={Styles.container}>
      <ul>
        {productList?.map((product) => {
          return (
            <li key={product.id}>
              <Product 
              product={product} 
              handleClick={handleClick}
              />
            </li>
          );
        })}
      </ul>
      </div>
    </>
  )
};
