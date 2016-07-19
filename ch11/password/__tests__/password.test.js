// jest.dontMock('../js/password.js')
jest.autoMockOff()
const TestUtils = require('react-addons-test-utils')
const React = require('react')
const ReactDOM = require('react-dom')
const fD = ReactDOM.findDOMNode
const Password = require('../jsx/password.jsx')

describe('Password', function() {
  it('changes after clicking the Generate button', (done)=>{
    let password = TestUtils.renderIntoDocument(
      React.createElement(Password, {
        upperCase: true,
        lowerCase: true,
        special: true,
        number: true,
        over6: true
      })
    )

    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
    expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character')
    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn')
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text')
    TestUtils.Simulate.click(fD(generateButton))
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike')
    done()
  })
})
