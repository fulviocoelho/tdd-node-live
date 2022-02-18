const { expect } = require('chai')
const { logger_factory } = require('../src/factories/logger')

describe('Logger test suit', () => {
    it('SUCCESS: Logger initializes sucessfully', () => {
        expect(logger_factory).not.to.throws();
    })
    it('SUCCESS: Logger should not throw', () => {
        const logger = logger_factory(() => {})
        const methods = ['info', 'alert', 'error', 'nl']
        for(const method of methods){
            expect(logger[method]).not.to.throws();
        }
    })
    it('ERROR: Logger should throw', () => {
        const logger = logger_factory(() => { throw new Error() })
        const methods = ['info', 'alert', 'error', 'nl']
        for(const method of methods){
            expect(logger[method]).to.throws();
        }
    })
})