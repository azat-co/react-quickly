const React = require('react')
const ReactDOM = require('react-dom')
const request = require('axios')
const { browserHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} = require('react-router')

const Layout = require('./layout.jsx')
const Index = require('./index.jsx')
const Cart = require('./cart.jsx')
const Checkout = require('./checkout.jsx')
const Product = require('./product.jsx')

request.get('http://localhost:3000/api/products')
  .then((response) => {
    const products = response.data
    let cartItems = {}
    const addToCart = (id) => {
      if (cartItems[id])
        cartItems[id] += 1
      else
        cartItems[id] = 1
    }

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Index} products={products}/>
          <Route path="/products/:id" component={Product}
                 addToCart={addToCart}
                 products={products} />
          <Route path="/cart" component={Cart}
                 cartItems={cartItems} products={products}/>
        </Route>
        <Route path="/checkout" component={Checkout}
               cartItems={cartItems} products={products}/>
      </Router>
    ), document.getElementById('content'))
  })
  .catch((err) => {
    console.log(err)
  })


