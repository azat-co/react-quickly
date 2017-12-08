const React = require('react')
const Copy = require('./copy')
const { Link } = require('react-router')

class Index extends React.Component {
  render() {
    return (
      <div>
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {this.props.route.products.map(picture => (
            <Link key={picture.id}
                  to={{pathname: `/products/${picture.id}`,
                    state: { modal: true,
                      returnTo: this.props.location.pathname }
                  }
                  }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

module.exports = Index
