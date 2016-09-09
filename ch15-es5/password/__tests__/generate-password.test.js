jest.dontMock('../js/generate-password.js')
var password,
  password2,
  pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/
require('../js/generate-password')

describe('method generatePassword', function(){

  it('returns a generated password of the set pattern', function(){
    password = generatePassword()
    expect(password).toMatch(pattern)
  })

  it('return a new value different from the previous one', function() {
    password2 = generatePassword()
    expect(password2).toMatch(pattern)
    expect(password2).not.toEqual(password)
  })

})
