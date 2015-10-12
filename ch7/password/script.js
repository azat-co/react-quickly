'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rules = {
  upperCase: {
    message: 'Must have at least one upper-case character',
    pattern: /([A-Z]+)/
  },
  lowerCase: {
    message: 'Must have at least one lower-case character',
    pattern: /([a-z]+)/
  },
  special: {
    message: 'Must have at least one special character (#$@!&%...)',
    pattern: /([\#\$\@\!\$\%]+)/
  },
  number: {
    message: 'Must have at least one number',
    pattern: /([0-9]+)/
  },
  'over6': {
    message: 'Must be more than 6 characters',
    pattern: /(.{6,})/
  }
};
var Password = React.createClass({
  displayName: 'Password',

  getInitialState: function getInitialState() {
    return { strength: {}, password: '', visible: false, ok: false };
  },
  checkStrength: function checkStrength(e) {
    var _this = this;
    var password = e.target.value;
    this.setState({ password: password });
    var strength = {};
    Object.keys(this.props).forEach(function (key, index, list) {
      if (_this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true;
      }
    });
    this.setState({ strength: strength }, function () {
      if (Object.keys(_this.state.strength).length == Object.keys(_this.props).length) {
        _this.setState({ ok: true });
      }
    });
  },
  toggleVisibility: function toggleVisibility() {
    this.setState({ visible: !this.state.visible }, function () {});
  },

  generate: function generate() {
    var _this = this;
    // (function(){g=function(){c='!@#$%0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';p='';for(i=0;i<8;i++){p+=c.charAt(Math.floor(Math.random()*62));}return p;};p=g();while(!/[A-Z]/.test(p)||!/[0-9]/.test(p)||!/[a-z]/.test(p)){p=g();}return p;})()

    this.setState({ visible: true, password: Math.random().toString(36).slice(-8) }, function () {
      _this.checkStrength({ target: { value: _this.state.password } });
    });
  },
  render: function render() {
    var _this = this;
    var processedRules = Object.keys(this.props).map(function (key) {
      if (_this.props[key]) {
        var obj = {};
        obj.key = key;
        obj.rule = rules[key];
        obj.isCompleted = true;
        return obj;
      }
    });
    return React.createElement(
      'div',
      { className: 'well form-group col-md-6' },
      React.createElement(
        'label',
        { forHtml: 'password' },
        'Password'
      ),
      React.createElement(PasswordInput, { name: 'password', onChange: this.checkStrength, value: this.state.password, visible: this.state.visible }),
      React.createElement(PasswordVisibility, { checked: this.state.visible, onChange: this.toggleVisibility }),
      React.createElement(PasswordInfo, { rules: processedRules, strength: this.state.strength }),
      React.createElement(
        PasswordGenerate,
        { onClick: this.generate },
        'Generate'
      ),
      React.createElement(
        'button',
        { className: 'btn btn-primary' + (this.state.ok ? '' : ' disabled') },
        'Save'
      )
    );
  } });
var PasswordGenerate = React.createClass({
  displayName: 'PasswordGenerate',

  render: function render() {
    return React.createElement(
      'button',
      _extends({}, this.props, { className: 'btn' }),
      this.props.children
    );
  }
});
var PasswordInput = React.createClass({
  displayName: 'PasswordInput',

  render: function render() {
    return React.createElement('input', { className: 'form-control', type: this.props.visible ? 'text' : 'password', name: this.props.name, value: this.props.value, onChange: this.props.onChange });
  }
});
var PasswordVisibility = React.createClass({
  displayName: 'PasswordVisibility',

  render: function render() {
    return React.createElement(
      'label',
      { className: 'form-control' },
      React.createElement('input', { className: '', type: 'checkbox', checked: this.props.checked, onChange: this.props.onChange }),
      ' Show password'
    );
  }
});

var PasswordInfo = React.createClass({
  displayName: 'PasswordInfo',

  render: function render() {
    var _this = this;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        'Password Strength'
      ),
      React.createElement(
        'ul',
        null,
        this.props.rules.map(function (processedRule, index, list) {
          if (_this.props.strength[processedRule.key]) return React.createElement(
            'li',
            { key: processedRule.key },
            React.createElement(
              'strike',
              null,
              processedRule.rule.message
            )
          );else return React.createElement(
            'li',
            { key: processedRule.key },
            processedRule.rule.message
          );
        })
      )
    );
  }
});

ReactDOM.render(React.createElement(Password, {
  upperCase: true,
  lowerCase: true,
  special: true,
  number: true,
  over6: true }), document.getElementById('password'));
//# sourceMappingURL=script.js.map
