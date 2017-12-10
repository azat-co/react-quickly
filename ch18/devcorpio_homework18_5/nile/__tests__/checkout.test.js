const React = require('react')
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');
const Checkout = require('./../client/jsx/checkout')
const Products = require('./../seeds/products.json')

Enzyme.configure({ adapter: new Adapter() });

describe('checkout', () => {
  const cartItems = {
    [Products[0].id]: 1,
    [Products[1].id]: 3,
    [Products[2].id]: 4
  }

  const totalQuantityToShow = 8
  const totalCartItems = Object.keys(cartItems).length
  const wrapper = Enzyme.mount(<Checkout products={Products} cartItems={cartItems}></Checkout>)

  it(`has ${totalCartItems} products`, () => {
    expect(wrapper.find('tr').length).toBe(totalCartItems)
  })

  it('has the correct product title', () => {
    Object.keys(cartItems).forEach((value) => {
      let productTitle = Products[value].title
      expect(wrapper.find(`td[children="${productTitle}"]`).length).toBe(1)
    })
  })

  it('each product has the correct quantity', () => {
    Object.keys(cartItems).forEach((value) => {
      let productId = Products[value].id
      let productQuantity = cartItems[productId]

      expect(wrapper.find(`td#item-quantity-${productId}[children=${productQuantity}]`).length).toBe(1)
    })
  })

  it(`show the total product quantity correctly`, () => {
    expect(wrapper.find('p').text()).toBe("Total: " + totalQuantityToShow)
  })

})
