var Product = function Product (props) {
  return (
    <div>
      <h3>Product ({props.params.id})</h3>
      <p>{products[props.params.id]}</p>
    </div>
  )
}