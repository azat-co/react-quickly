const React = require('react')
const Router = require('react-router')
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');
const Product = require('./../client/jsx/product')
const Products = require('./../seeds/products.json')
const MemoryRouter = Router.MemoryRouter

Enzyme.configure({ adapter: new Adapter() });

describe('product', () => {
  const fn = jest.fn()
  const firstProduct = Products[0]

  const wrapper = Enzyme.mount(<MemoryRouter>
        <Product match={{params: { id: firstProduct.id }}} products={Products} addToCart={fn}></Product>
    </MemoryRouter>
  )

  it('has correct image', () => {
    expect(wrapper.find('img').props().src).toBe(firstProduct.src)
  })


  it('has correct title', () => {
    expect(wrapper.find('p').props().children).toBe(firstProduct.title)
  })

  it('link execute add to cart function', () => {
    wrapper.find('a').simulate('click')
    expect(fn).toHaveBeenCalled()
  })
})
