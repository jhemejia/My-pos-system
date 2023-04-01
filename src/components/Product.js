import Styles from '../Styles/styles.module.scss';

export const Product = (props) => {
const {product, handleClick}= props;

    return (  
        <div className={Styles.product}>   
            <div className={Styles.flipCard}>
                <div className={Styles.flipCardInner}>
                    <div className={Styles.flipCardFront}>
                        <img src={product.images? product.images[0]:''} alt={product.title} />  
                    </div>
                    <div className={Styles.flipCardBack}>
                         <p> Price: ${product.price} </p> 
                         <br/>  
                        <p>Description: {product.description}</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleClick(product)}>{product.title}</button>
        </div>     
    );
} 