// For older version of Jest, turn automocking off by uncommenting the next line
// jest.autoMockOff()

describe('Password', function() {
  it('changes after clicking the Generate button', (done)=>{
    const TestUtils = require('react-dom/test-utils')
    const { createRenderer } = require('react-test-renderer/shallow')
    const React = require('react')
    const ReactDOM = require('react-dom')
    const Password = require('../jsx/password.jsx')

    const PasswordGenerate = require('../jsx/password-generate.jsx')
    const PasswordInfo = require('../jsx/password-info.jsx')
    const PasswordInput = require('../jsx/password-input.jsx')
    const PasswordVisibility = require('../jsx/password-visibility.jsx')

    const fD = ReactDOM.findDOMNode

    let password = TestUtils.renderIntoDocument(<Password
      upperCase={true}
      lowerCase={true}
      special={true}
      number={true}
      over6={true}
      />
    )

    // SHALLOW RENDERING: No children

    const passwordRenderer = createRenderer()
    passwordRenderer.render(<Password/>)
    let p = passwordRenderer.getRenderOutput()
    expect(p.type).toBe('div')
    expect(p.props.children.length).toBe(6)

    // NORMAL RENDERING

    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
    expect(rules.length).toBe(5)
    expect(rules.length).toEqual(5)
    expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character')
    expect(fD(rules[0]).textContent).toBe('Must have at least one upper-case character')
    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn')
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text')
    TestUtils.Simulate.click(fD(generateButton))
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike')
    done()
  })
})
