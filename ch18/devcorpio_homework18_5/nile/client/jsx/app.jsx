const React = require('react')
const ReactDOM = require('react-dom')
const request = require('axios')
const ReactRouterDom = require('react-router-dom')
const withRouter = require('react-router').withRouter
const BrowserRouter = ReactRouterDom.BrowserRouter
const Route = ReactRouterDom.Route
const Switch = ReactRouterDom.Switch

const Layout = withRouter(require('./layout.jsx'))
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
      <BrowserRouter>
          <div>
            <Layout>
              <Switch>
                <Route path="/" exact render={(props) => (<Index products={products} {...props}/>)} />
                <Route
                  path="/products/:id"
                  render={(props) => (<Product addToCart={addToCart} products={products} {...props}/>)} />
                <Route
                  path="/cart"
                  render={(props) => (<Cart cartItems={cartItems} products={products} {...props} />)} />
              </Switch>
            </Layout>
            <Switch>
              <Route
                path="/checkout"
                render={(props) => (<Checkout cartItems={cartItems} products={products} {...props} />)} />
            </Switch>
          </div>
      </BrowserRouter>
    ), document.getElementById('content'))
  })
  .catch((err) => {
    console.log(err)
  })


