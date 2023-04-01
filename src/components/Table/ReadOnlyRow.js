import Styles from '../../Styles/styles.module.scss'
import { deleteProduct } from '../../features/allProducts/productSlice';
import { useDispatch } from 'react-redux';


const ReadOnlyRow = ({product, handleEditClick}) =>{
    const dispatch = useDispatch();   
    const handleDeleteProduct = (event,id)=>{
        event.preventDefault();
        dispatch(deleteProduct(id));
    }

    return (
        <tr  key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.images? product.images[0]:''} alt={product.title} /></td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.brand}</td>
              <td>{product.category.charAt(0).toUpperCase()+ product.category.slice(1)}</td>
              <td><div className={Styles.actionButton}><input type="button" value="Edit" onClick={handleEditClick}/><input type="button" value="Delete" onClick={(e)=>handleDeleteProduct(e,product.id)}/> </div></td>
          </tr>
    )

}
export default ReadOnlyRow;