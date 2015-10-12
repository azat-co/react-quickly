jest.dontMock('../script.js')

describe('Password', function() {
  it('changes after click', function(){
    var TestUtils = require('react-addons-test-utils')
    React = require('../react-with-addons.js')
    ReactDOM = require('../react-dom.js')
    require('../password.js')

    var password = TestUtils.renderIntoDocument(
      React.createElement(Password, {
        upperCase: true
      })
    )

    var li = TestUtils.findRenderedDOMComponentWithTag(
         password, 'li')
    expect(ReactDOM.findDOMNode(li).textContent).toEqual('Must have at least one upper-case character')

   // Simulate a click and verify that it is now On
   var generateButton = TestUtils.findRenderedDOMComponentWithClass(
     password, 'generate-btn')
   TestUtils.Simulate.change(generateButton);
   expect(ReactDOM.findDOMNode(li).textContent).toEqual('On');
  })
})
