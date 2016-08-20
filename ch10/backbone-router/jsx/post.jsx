const React = require('react')

module.exports = function Product(props) {
  let post = props.posts.find(element=>element.slug === props.id)
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a href={post.link} target="_blank">Continue reading...</a></p>
    </div>
  )
}