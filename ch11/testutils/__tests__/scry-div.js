jest.dontMock('react')
jest.dontMock('react-addons-test-utils')

describe('HelloWorld', ()=>{
  const TestUtils = require('react-addons-test-utils')
  const React = require('react')

  it('has a div', (done)=>{

    const HelloWorld = React.createClass({
      render() {
        return <div>{this.props.children}</div>
      }
    })
    let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Node!</HelloWorld>)
    expect( TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length).toBe(1)
    console.log('found this many divs: ', TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length)

    done()
  })
})