;(function(){
  var Logger = {
    componentWillMount: function(){
      console.log('componentWillMount is triggered')
    },
    componentDidMount: function(e){
      console.log('componentDidMount is triggered')
      console.log('DOM node: ', ReactDOM.findDOMNode(this))
    },
    componentWillReceiveProps: function(newProps){
      console.log('componentWillReceiveProps is triggered')
      console.log('new props: ', newProps)
    },
    shouldComponentUpdate: function(newProps, newState){
      console.log('shouldComponentUpdate is triggered')
      console.log('new props: ', newProps)
      console.log('new state: ', newState)
      return true
    },
    componentWillUpdate: function(newProps, newState){
      console.log('componentWillUpdate is triggered')
      console.log('new props: ', newProps)
      console.log('new state: ', newState)
    },
    componentDidUpdate: function(oldProps, oldState){
      console.log('componentDidUpdate is triggered')
      console.log('new props: ', oldProps)
      console.log('old props: ', oldState)
    },
    componentWillUnmount: function(){
      console.log('componentWillUnmount')
    }
  }

if (typeof window.Logger == 'undefined') {window.Logger = Logger}
}())
