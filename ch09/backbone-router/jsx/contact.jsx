const React = require('react')

module.exports = function Contact() {
  return <div>
    <h3>Contact Us</h3>
    <input type="text" placeholder="your email" className="form-control"></input>
    <textarea type="text" placeholder="your message" className="form-control"></textarea>
    <button className="btn btn-primary">send</button>
  </div>
}