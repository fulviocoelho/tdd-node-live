const { expect } = require('chai');
const sinon = require('sinon');
const factory = require('../src/factories/logger')

const sand_box = sinon.createSandbox()

describe('Index test suit', () => {
    beforeEach(() => {
        sand_box.restore()
    })
    afterEach(() => {
        sand_box.restore()
    })
    it('SUCCESS: Index should not throw', () => {
        sand_box.stub(console, 'log').returns()
        expect(() => {
            require('../src/index').main();
        }).not.to.throw()
    })
    it('SUCCESS: Index should not throw and has no invalid workers', () => {
        sand_box.stub(console, 'log').returns()
        expect(() => {
            require('../src/index').main({ "workers": [] });
        }).not.to.throw()
    })
    it('ERROR: Index should throw', () => {
        expect(() => {
            require('../src/index').main({}, {
                info: () => {
                    throw new Error
                },
                error: () => {
                    throw new Error
                },
            })
        }).to.throw()
    })
})