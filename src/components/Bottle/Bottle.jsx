import './Bottle.css'
import PropTypes from 'prop-types';
export default function Bottle({bottle,  handelAddToCart}) {
    const {name, img, price } = bottle;

  return (
    <div className="bottle">
        <h3>Bottle: {name}</h3>
        <img src={img} alt="" />
        <p>Price: ${price}</p>
        <button onClick={() => handelAddToCart(bottle)}>Purchase</button>
    </div>
  )
}

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func.isRequired,
}