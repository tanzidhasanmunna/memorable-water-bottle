import PropTypes from 'prop-types';
import './Cart.css'

export default function Cart({cart,handelRemoveFromCart}) {
  return (
    <div>
        <h2>Cart: {cart.length}</h2>
        <div className="cart-container">
            {
                cart.map(bottle => {
                    return(
                        <div key={bottle.id} className="cart-item">
                            <h3>Bottle: {bottle.name}</h3>
                            <img src={bottle.img} alt="" />
                            <p>Price: ${bottle.price}</p>
                            <button onClick={() => handelRemoveFromCart(bottle.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handelRemoveFromCart : PropTypes.func.isRequired
}