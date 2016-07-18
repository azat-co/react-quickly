// jest.dontMock('../js/password.js')
jest.autoMockOff()

describe('Password', function() {
  it('changes after click', function(){
    var TestUtils = require('react-addons-test-utils')
    React = require('../js/react-with-addons.js')
    ReactDOM = require('../js/react-dom.js')
    var fD = ReactDOM.findDOMNode
    require('../js/generate-password.js')
    require('../js/password.js')

    var password = TestUtils.renderIntoDocument(
      React.createElement(Password, {
        upperCase: true,
        lowerCase: true,
        special: true,
        number: true,
        over6: true
      })
    )

    var rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
    expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character')
    var generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn')
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text')
    TestUtils.Simulate.click(fD(generateButton))
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike')
  })
})
