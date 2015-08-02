var Button = React.createClass({
  propTypes: {
    handler:  React.PropTypes.func.isRequired,
    title: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {buttonLabel: 'lorem ipsum'}
  },
  render: function(){
    return <button >{this.props.buttonLabel}</button>
  }
})
var Content = React.createClass({
  render: function() {
    var number = 1
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button title={number}/>
        <Button />
      </div>
    );
  }
})

React.render(
  <Content />,
  document.getElementById('content')
);