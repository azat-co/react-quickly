const React = require('react')
const {
  Link
} = require('react-router')

class Cart extends React.Component {
  render() {
    return <div>
      {(Object.keys(CartItems).length == 0) ? <p>Your cart is empty</p> : '' }
       <ul>
        {Object.keys(CartItems).map((item, index, list)=>{
          return <li key={item}>{PRODUCTS[item].title} - {CartItems[item]}</li>
        })}
      </ul>
      <Link to="/checkout" className="btn btn-primary">Checkout</Link>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  }
}

module.exports = Cart