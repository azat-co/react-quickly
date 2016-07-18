module.exports = class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>IT Solutions</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav ">
            <li className={(this.props.history.isActive('/about'))? 'active': ''}><Link to="/about" activeClassName="active">About</Link></li>
            <li className={(this.props.history.isActive('/products'))? 'active': ''}><Link to="/products" activeClassName="active">Products</Link></li>
            <li className={(this.props.history.isActive('/contact'))? 'active': ''}><Link to="/contact" activeClassName="active">Contact Us</Link></li>
            <li><Link to="/login" activeClassName="active">Login</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}