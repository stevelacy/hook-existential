const should = require('should')

describe('existential', () => {
  it('should convert first level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct?.base)
    done()
  })

  it('should convert second level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct.base?.secondary)
    done()
  })
  it('should convert first and second level checks', (done) => {
    const struct = {
      base: {
        secondary: 'exists'
      }
    }
    should(struct?.base?.secondary)
    done()
  })
})
