var Content = React.createClass({
  displayName: 'Content',

  getInitialState() {
    return {
      description: 'React rocks!'
    };
  },
  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked);
  },
  handleInput(event) {
    console.log('onInput event: ', event.target.value, event.target.checked);
  },
  handleSubmit(event) {
    console.log(event.target.value, event.target.checked);
  },
  render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'h2',
          null,
          'input: text'
        ),
        React.createElement('input', { type: 'text', name: 'new-book-title', defaultValue: 'Node: The Best Parts' }),
        React.createElement('hr', null),
        React.createElement(
          'h2',
          null,
          'input: password'
        ),
        React.createElement('input', { type: 'password', defaultValue: '123456', onChange: this.handleChange, onInput: this.handleInput }),
        React.createElement('hr', null),
        React.createElement(
          'h2',
          null,
          'input: radio'
        ),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'angular', onChange: this.handleChange }),
          'Angular'
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'react', defaultChecked: true }),
          'React'
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'polymer', onChange: this.handleChange }),
          'Polymer'
        ),
        React.createElement('hr', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'node', onChange: this.handleChange }),
          'Node'
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'react', checked: true, onChange: this.handleChange }),
          'React'
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'express', onChange: this.handleChange }),
          'Express'
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'mongodb', onChange: this.handleChange }),
          'MongoDB'
        ),
        React.createElement('hr', null),
        React.createElement('textarea', {
          name: 'description1',
          defaultValue: "Pro Express.js is for the reader\n who wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework",
          onChange: this.handleChange }),
        React.createElement('textarea', {
          name: 'description2',
          defaultValue: this.state.description,
          onChange: this.handleChange }),
        React.createElement('hr', null),
        React.createElement(
          'select',
          { defaultValue: 'node', readOnly: true },
          React.createElement(
            'option',
            { value: 'ruby' },
            'Ruby'
          ),
          React.createElement(
            'option',
            { value: 'node' },
            'Node'
          ),
          React.createElement(
            'option',
            { value: 'python' },
            'Python'
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'select',
          { multiple: true, defaultValue: ['meteor', 'react'], readOnly: true },
          React.createElement(
            'option',
            { value: 'meteor' },
            'Meteor'
          ),
          React.createElement(
            'option',
            { value: 'react' },
            'React'
          ),
          React.createElement(
            'option',
            { value: 'jQuery' },
            'jQuery'
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'h2',
          null,
          'input: button'
        ),
        React.createElement('input', { type: 'button', defaultValue: 'Send', onClick: this.handleSubmit })
      )
    );
  }
});