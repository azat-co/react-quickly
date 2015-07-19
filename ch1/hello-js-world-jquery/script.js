var HelloWorld = function(name){ 
  return jQuery('<h1>Hello '+name+' world!</h1>')
}


jQuery('#example')
  .append(HelloWorld('Ember.js'))
  .append(HelloWorld('Backbone.js'))
  .append(HelloWorld('Angular.js'))
