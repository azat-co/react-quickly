jest.dontMock('../js/generate-password.js')

beforeEach(function(){
  var password
  require('../js/generate-password')
})

describe('method generatePassword', function(){

  it('returns a generated password of lower-case characters and numbers with the length of 8', function(){
    password = generatePassword()
    expect(password).toMatch(/^[a-z0-9]{8}$/)
  })

  it('return a new value different from the previous one', function() {
    password2 = generatePassword()
    expect(password2).not.toEqual(password)
  });

})
