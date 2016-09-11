const React = require('react')
const {
  Link
} = require('react-router')

class Product extends React.Component {
  handlerBuy () {
    this.props.route.handlerBuy(this.props.params.id)
  }
  render() {
    return (
      <div>
        <img src={this.props.route.products[this.props.params.id].src} style={{ height: '80%' }} />
        <p>{this.props.route.products[this.props.params.id].title}</p>
        <Link
          to={{
            pathname: `/cart`,
            state: { productId: this.props.params.id}
          }}
          onClick={this.handlerBuy}
          className="btn btn-primary">
          Buy
        </Link>
      </div>
    )
  }
}

module.exports = Product