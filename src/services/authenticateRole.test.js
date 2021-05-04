import userRole from './authenticateRole'
const expect = require('chai').expect

describe('authenticateRole file', function () {
  describe('Check if token has information about role.', function () {
    const exampleToken = {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYxNjcwMDI3NSwiZXhwIjoxNjE2NzAyMDc1LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.6VN_Wn_vpTTEki1sWKxlztW8X8OAx8fNjWIUr-AcKGQ'
      }
    }

    it('should return role: premium or basic.', function () {
      expect(userRole(exampleToken)).to.be.oneOf(['basic', 'premium'])
    })
  })
})
