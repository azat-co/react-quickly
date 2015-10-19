// jest.dontMock('../src/build/autocomplete.js')
jest.autoMockOff()

var rooms = [
    { "_id" : "5622eb1f105807ceb6ad868b", "name" : "node" },
    { "_id" : "5622eb1f105807ceb6ad868c", "name" : "react" },
    { "_id" : "5622eb1f105807ceb6ad868d", "name" : "backbone" },
    { "_id" : "5622eb1f105807ceb6ad868e", "name" : "angular" }
  ]
var TestUtils = require('react-addons-test-utils'),
  React = require('react'),
  ReactDOM = require('react-dom'),
  Autocomplete = require('../src/build/autocomplete.js'),
  fD = ReactDOM.findDOMNode

var autocomplete = TestUtils.renderIntoDocument(
  React.createElement(Autocomplete, {
    options: rooms,
    url: 'test'
  })
)
var optionName = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-name')

describe('Autocomplete', function() {
  it('have four initial options', function(){
    var options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(4)
  })
  it('change options based on the input', function(){
    expect(fD(optionName).value).toBe('')
    fD(optionName).value = 'r'
    TestUtils.Simulate.change(fD(optionName))
    expect(fD(optionName).value).toBe('r')
    options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(1)
    expect(fD(options[0]).textContent).toBe('#react')
  })
  it('offer to save option when there are no matches', function(){
    fD(optionName).value = 'ember'
    TestUtils.Simulate.change(fD(optionName))
    options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(0)
    var optionAdd = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-add')
    expect(fD(optionAdd).textContent).toBe('Add #ember')

  })
})
