const React = require('react')
const TestUtils = require('react-dom/test-utils')
const Product = require('./../client/jsx/product')
const Products = require('./../seeds/products.json')

describe('product', () => {
  const fn = jest.fn()
  let product
  beforeEach(() => {
    product = TestUtils.renderIntoDocument(<Product params={{id: 1}} route={{products: Products, addToCart: fn}}></Product>)
  })

  it('product has image', () => {
    expect(TestUtils.scryRenderedDOMComponentsWithTag(product, 'img').length).toBe(1)
  })

  it('product has paragraph', () => {
    expect(TestUtils.scryRenderedDOMComponentsWithTag(product, 'p').length).toBe(1)
  })

  it('product has link', () => {
    expect(TestUtils.scryRenderedDOMComponentsWithTag(product, 'a').length).toBe(1)
  })
})


