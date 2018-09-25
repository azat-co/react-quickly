const React = require('react')
const Link = require('react-router-dom').Link

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }
  handleBuy (event) {
    this.props.addToCart(this.props.match.params.id)
  }
  render() {
    const productId = this.props.match.params.id
    return (
      <div>
        <img src={this.props.products[productId].src} style={{ height: '80%' }} />
        <p>{this.props.products[productId].title}</p>
        <Link
          to={{
            pathname: `/cart`,
            state: { productId: productId}
          }}
          onClick={this.handleBuy}
          className="btn btn-primary">
          Buy
        </Link>
      </div>
    )
  }
}

module.exports = Product
