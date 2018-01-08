var Content = React.createClass({
  getInitialState() {
    return {
      description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      }
    }
  },
  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked // true
    this.setState({radioGroup: obj})
  },
  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked)
  },
  handleInput(event){
    console.log('onInput event: ', event.target.value, event.target.checked)
  },
  handleSubmit(event){
    console.log(event.target.value, event.target.checked)
  },
  handleSelectChange(event) {
    this.setState({selected: event.target.value})
    console.log(event.target.value, event.target.selected)
  },
  render() {
    return <div className="container">
      <form  onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text" name="new-book-title" defaultValue="Node: The Best Parts"/>
        <hr/>
        <h2>input: password</h2>
        <input type="password" defaultValue="123456" onChange={this.handleChange} onInput={this.handleInput}/>
        <hr/>
        <h2>input: radio</h2>
        <label>
          <input type="radio" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
          Angular
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
          React
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
          Polymer
        </label>
        <hr/>
        <label>
          <input type="checkbox" name="checkboxGroup" value='node'  onChange={this.handleChange}/>
          Node
        </label>
        <br/>
        <label>
          <input type="checkbox" name="checkboxGroup" value='react' checked onChange={this.handleChange}/>
          React
        </label>
        <br/>
        <label>
          <input type="checkbox" name="checkboxGroup" value='express' onChange={this.handleChange}/>
          Express
        </label>
        <br/>
        <label>
          <input type="checkbox" name="checkboxGroup" value='mongodb' onChange={this.handleChange}/>
          MongoDB
        </label>
        <hr/>
        <textarea
          name="description"
          defaultValue={this.state.description}
          onChange={this.handleChange}/>
        <hr/>
        <textarea
          name="description1"
          defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
          onChange={this.handleChange}/>
        <hr/>
        <select value={this.state.select} onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <hr/>
        <select multiple={true} defaultValue={['meteor', 'react']} readOnly>
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jQuery">jQuery</option>
        </select>
        <hr/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>

      </form>
    </div>
  }
})