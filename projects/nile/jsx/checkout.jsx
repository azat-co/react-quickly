const React = require('react')
const {
  Link
} = require('react-router')


class Checkout extends React.Component {
  render() {
    let count = 0
    return <div><h1>Invoice</h1><table className="table table-bordered"><tbody>
      {Object.keys(CartItems).map((item, index, list)=>{
        count += CartItems[item]
        return <tr key={item}>
          <td>{PRODUCTS[item].title}</td>
          <td>{CartItems[item]}</td>
        </tr>
      })}
    </tbody></table><p>Total: {count}</p></div>
  }
}

module.exports = Checkout