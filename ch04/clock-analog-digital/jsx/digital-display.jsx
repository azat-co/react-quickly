const DigitalDisplay = function(props) {
  return <div>{props.time.toLocaleString()}</div>
}