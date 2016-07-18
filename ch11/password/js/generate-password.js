;(function(){
  //Credit to Blender http://stackoverflow.com/a/12635919
  window.generatePassword = function() {
    var specials = '!@#$%^&*()_+{}:"<>?\|[]\',./`~'
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numbers = '0123456789'

    var all = specials + lowercase + uppercase + numbers

    var pick = function(set, min, max) {
      var n, chars = ''

      if (typeof max === 'undefined') {
          n = min
      } else {
          n = min + Math.floor(Math.random() * (max - min))
      }

      for (var i = 0; i < n; i++) {
          chars += set.charAt(Math.floor(Math.random() * set.length))
      }
      return chars
    }

    // Credit to Christoph: http://stackoverflow.com/a/962890/464744
    var shuffle = function(set) {
        var array = set.split('')
        var tmp, current, top = array.length

        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1))
            tmp = array[current]
            array[current] = array[top]
            array[top] = tmp
        }

        return array.join('')
    }

    var password = (pick(specials, 1)
      + pick(lowercase, 1)
      + pick(numbers, 1)
      + pick(uppercase, 1)
      + pick(all, 4, 12))

    return shuffle(password)
  }
})()
