class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleRadio = this.handleRadio.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.state = {
      description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node'
    }
  }
  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked // true
    this.setState({radioGroup: obj})
  }
  handleCheckbox(event) {
    let obj = this.state.checkboxGroup
    obj[event.target.value] = event.target.checked // true or false
    this.setState({checkboxGroup: obj})
  }
  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked)
  }
  handleInput(event){
    console.log('onInput event: ', event.target.value, event.target.checked)
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleSubmit(event){
    console.log(event.target.value, event.target.checked)
    fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
      .then((response)=>{return response.json()})
      .then((data)=>{console.log('Submitted: ', data)})
  }
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value})
    console.log(event.target.value, event.target.selected)
  }
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
        <h2>input: checkbox</h2>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='node'
            checked={this.state.checkboxGroup['node']}
            onChange={this.handleCheckbox}/>
          Node
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='react'
            checked={this.state.checkboxGroup['react']}
            onChange={this.handleCheckbox}/>
          React
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='express'
            checked={this.state.checkboxGroup.express}
            onChange={this.handleCheckbox}/>
          Express
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='mongodb'
            checked={this.state.checkboxGroup['mongodb']}
            onChange={this.handleCheckbox}/>
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
        <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
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
        <h2>input: first name [text]</h2>
        <input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
        <hr/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
        <hr/>
        <input type="text" name="title" value="Mr." />

      </form>
    </div>
  }
}