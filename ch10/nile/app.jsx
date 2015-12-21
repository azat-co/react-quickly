import { createHashHistory, useBasename} from 'history'
// let createHistory = hashHistory
import React from 'react'
import { render } from 'react-dom'
// import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const history = createHashHistory({
  // queryKey: false
})
// const history = useBasename(createHistory)({
//   basename: '/pinterest'
// })

const PRODUCTS = [
  { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'}
]

let CartItems = []

class Modal extends React.Component{
  constructor(props) {
    super(props)
    this.styles = {
      position: 'fixed',
      top: '20%',
      right: '20%',
      bottom: '20%',
      left: '20%',
      width: 450,
      height: 400,
      padding: 20,
      boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
      overflow: 'auto',
      background: '#fff'
    }
  }
  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
}

const Heading = () => {
  return <h1>Nile Book Store</h1>
}

const Copy = () => {
  return <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.</p>
}

const Cart = React.createClass ({
  handlerCheckout() {
    CartItems.forEach((item, index, list)=>{
      window.open(item.url)
    })
  },
  render() {
    return <div>
      {(CartItems.length == 0) ? <p>Your cart is empty</p> : '' }
       <ul>
        {CartItems.map((item, index, list)=>{
          return <li key={index}>{item.title}</li>
        })}
      </ul>
      <button className="btn btn-primary" onClick={this.handlerCheckout}>Checkout</button>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  }
})

const App = React.createClass({

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    ) {
      this.previousChildren = this.props.children
    }
  },

  render() {
    let { location } = this.props
    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
      <div>
        <Heading/>

        <div>
          {isModal ? this.previousChildren : this.props.children}

          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}

        </div>
      </div>
    )
  }
})

class Index extends React.Component {
  render() {
    return (
      <div>
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={`/products/${picture.id}`}
              state={{ modal: true, returnTo: this.props.location.pathname }}>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}



const Product = React.createClass({
  handlerBuy () {
    this.props.route.handlerBuy(this.props.params.id)
  },
  render() {
    return (
      <div>
        <img src={PRODUCTS[this.props.params.id].src} style={{ height: '80%' }} />
        <p>{PRODUCTS[this.props.params.id].title}</p>
        <Link
          to={`/cart`}
          onClick={this.handlerBuy}
          state={{ productId: this.props.params.id}}
          className="btn btn-primary">
          Buy
        </Link>
      </div>
    )
  }
})

const handlerBuy = (id) => {
  CartItems.push(PRODUCTS[id])
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product} handlerBuy={handlerBuy} />
      <Route path="/cart" component={Cart}/>
    </Route>
  </Router>
), document.getElementById('content'))
