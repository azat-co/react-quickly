var Button = React.createClass({
  propTypes: {
    handler:  React.PropTypes.func.isRequired,
    title: React.PropTypes.string,
    email: function(props, propName, componentName) {
  	  var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  	  if (!emailRegularExpression.test(props[propName])) {
  	    return new Error('Email validation failed!')
  	  }
  	}
  },
  getDefaultProps: function () {
    return {buttonLabel: 'Submit'}
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
        <Button email="not-a-valid-email"/>
        <Button email="hi@azat.co"/>
      </div>
    );
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
