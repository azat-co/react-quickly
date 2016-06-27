var Mouse = React.createClass({
  handleMouseOver(event) {
    console.log('mouse is over with event')
    window.e = event  // Anti-pattern
    console.dir(event.target)
    setTimeout(()=>{
      console.table(event.target)
      console.table(window.e.target)
    }, 2345)
  },
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOver={this.handleMouseOver}>
          Open DevTools and move your mouse cursor over here
        </div>
    </div>
  }
})