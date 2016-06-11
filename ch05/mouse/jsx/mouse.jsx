var Mouse = React.createClass({
  render: function(){
    return <div>
      <div style={{border: '1px solid red'}} onMouseOver={()=>{console.log('mouse is over')} > Open DevTools and move your mouse cursor over here</div>
    </div>
  }
})