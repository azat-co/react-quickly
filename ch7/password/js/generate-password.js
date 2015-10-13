;(function(){
  window.generatePassword = function() {
    return Math.random().toString(36).slice(-8)
  }
})()
