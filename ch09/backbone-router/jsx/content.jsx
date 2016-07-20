const React = require('react')
const Backbone = require('backbone')

class Content extends React.Component {

  render() {
    let activePath = Backbone.history.getFragment()
    return (
      <div>
        <h1>Node.University</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav ">
            <li className={(activePath==('about'))? 'active': ''}>
              <a href="#/about" >
                About
              </a>
            </li>
            <li className={(activePath==('posts'))? 'active': ''}>
              <a href="#/posts" >
                Blog
              </a>
            </li>
            <li className={(activePath==('contact'))? 'active': ''}>
              <a href="#/contact" >
                Contact Us
              </a>
            </li>
            <li>
              <a href="#/login" >
                Login
              </a>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
module.exports = Content