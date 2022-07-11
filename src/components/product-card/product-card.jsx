import React, {useContext} from 'react';
import CustomButton from '../custom-button/custom-button';
import { CartContext } from '../../contexts/cart.context';
import './product-card.scss';


function ProductCard( { product } ) {

    const { name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton buttonType='inverted' onClick={addProductToCart}>Add to Card</CustomButton>
            
        </div>
    )
}

export default ProductCard;