var HelloWorld = function(id, name, title){
  return jQuery('<h1>')
    .attr('id', id)
    .attr('title', title)
    .html('Hello ' + name + ' world!')
}

jQuery('#content').html('<div>')
jQuery('#content div')
  .append(HelloWorld('ember',
    'Ember.js',
    'A framework for creating ambitious web applications.'))
  .append(HelloWorld('backbone',
    'Backbone.js',
    'Backbone.js gives structure to web applications...'))
  .append(HelloWorld('angular',
    'Angular.js',
    'Superheroic JavaScript MVW Framework'))
