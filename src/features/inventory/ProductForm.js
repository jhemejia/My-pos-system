// import Styles from '../../Styles/styles.module.scss';
import { updateProduct } from "../allProducts/productSlice";
import { useDispatch } from "react-redux";

export const ProductForm = (props) =>{
    const { product } = props;
    const dispatch = useDispatch();

    const handleChange = ({target}) =>{
        const { name, value} = target;
        const id = product.id;
        dispatch(updateProduct({id, name, value }))
    }
    return (
        <div>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={product.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" value={product.description} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" value={product.price} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" value={product.stock} onChange={handleChange} />
            </div>
           
        </div>
        
    )
}