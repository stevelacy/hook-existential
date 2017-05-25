const should = require('should')

describe('existential', () => {
  it('should convert first level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct?.base).not.be.undefined()
    done()
  })

  it('should convert second level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct.base?.secondary).equal('exists')
    done()
  })
  it('should convert first and second level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct?.base?.secondary).equal('exists')
    done()
  })
  it('should convert function checks', (done) => {
    const func = () => true
    should(func?()).be.true()
    done()
  })
  it('should not convert non function checks', (done) => {
    const func = undefined
    should(func?()).be.undefined()
    done()
  })
})
