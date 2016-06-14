var Content = React.createClass({
  getInitialState() {
    return {
      description: 'React rocks!'
    }
  },
  handleChange(event) {
    console.log(event.target.value, event.target.checked)
  },
  handleSubmit(event){
    console.log(event.target.value, event.target.checked)
  },
  render() {
    return <div className="contaner">
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text" name="new-book-title" defaultValue="Node: The Best Parts"/>
        <hr/>
        <h2>input: password</h2>
        <input type="password" defaultValue="123456" onChange={this.handleChange}/>
        <hr/>
        <h2>input: radio</h2>
        <input type="radio" name="radioGroup" value='angular' onChange={this.handleChange}/>
        <input type="radio" name="radioGroup" value='react' defaultChecked />
        <input type="radio" name="radioGroup" value='polymer' onChange={this.handleChange}/>

        <hr/>
        <input type="checkbox" name="checkboxGroup" value='node'  onChange={this.handleChange}/>
        <input type="checkbox" name="checkboxGroup" value='react' checked onChange={this.handleChange}/>
        <input type="checkbox" name="checkboxGroup" value='express' onChange={this.handleChange}/>
        <input type="checkbox" name="checkboxGroup" value='mongodb' onChange={this.handleChange}/>

        <hr/>

        <textarea
          name="description1"
          defaultValue={"Pro Express.js is for the reader\n who wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
          onChange={this.handleChange}/>
        <textarea
          name="description2"
          defaultValue={this.state.description}
          onChange={this.handleChange}/>
        <hr/>
        <select defaultValue="node" readOnly>
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