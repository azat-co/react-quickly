var HelloWorld = function(name){
  return jQuery('<h1>Hello ' + name + ' world!</h1>')
}

jQuery('#example').html('<div>')
jQuery('#example div')
  .append(HelloWorld('Ember.js'))
  .append(HelloWorld('Backbone.js'))
  .append(HelloWorld('Angular.js'))
