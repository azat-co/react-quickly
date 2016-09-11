const React = require('react')
const {
  Link
} = require('react-router')

class Cart extends React.Component {
  render() {
    return <div>
      {(Object.keys(this.props.route.cartItems).length == 0) ? <p>Your cart is empty</p> : '' }
       <ul>
        {Object.keys(this.props.route.cartItems).map((item, index, list)=>{
          return <li key={item}>{this.props.route.products[item].title} - {this.props.route.cartItems[item]}</li>
        })}
      </ul>
      <Link to="/checkout" className="btn btn-primary">Checkout</Link>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  }
}

module.exports = Cart