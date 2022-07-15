import React, {/* useContext */} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button';
/* import { CartContext } from '../../contexts/cart.context'; */
import './product-card.scss';


function ProductCard( { product } ) {

    const { name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    /* const { addItemToCart } = useContext(CartContext); */
    /* const addProductToCart = () => addItemToCart(product); */

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product) );

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton buttonType='inverted' onClick={addProductToCart}>Add to Cart</CustomButton>
            
        </div>
    )
}

export default ProductCard;