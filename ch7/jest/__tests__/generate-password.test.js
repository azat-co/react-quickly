jest.dontMock('../generate-password.js')

beforeEach(function(){
  var password
  generatePassword = require('../generate-password')
})

describe('method generatePassword', function(){
  it('returns a generated password of lower-case characters and numbers with the length of 8', function(){
    password = generatePassword()
    expect(password).toMatch(/^[a-z0-9]{8}$/)
  })
})
