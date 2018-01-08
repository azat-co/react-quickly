var Content = React.createClass({
  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this))
  },
  componentDidMount(){
    console.dir(ReactDOM.findDOMNode(this))
  },
  render: function() {
    return (
      <div/>
    )
  }
})