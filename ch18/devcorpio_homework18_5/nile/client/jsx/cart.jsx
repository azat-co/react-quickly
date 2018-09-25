const React = require('react')
const Link = require('react-router-dom').Link

class Cart extends React.Component {
  render() {
    return <div>
      {(Object.keys(this.props.cartItems).length == 0) ? <p>Your cart is empty</p> : '' }
       <ul>
        {Object.keys(this.props.cartItems).map((item, index, list)=>{
          return <li key={item}>{this.props.products[item].title} - {this.props.cartItems[item]}</li>
        })}
      </ul>
      <Link to="/checkout" className="btn btn-primary">Checkout</Link>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  }
}

module.exports = Cart
