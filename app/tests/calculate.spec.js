const { expect } = require('chai')
const { age } = require('../src/usefull/calculate')

describe('Calculate test suit', () => {
    it('SUCCESS: Age should calculate age correctly', () => {
        const date_ob = new Date();
        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        const year = date_ob.getFullYear();
        const expected_age = 30

        expect(age(`${month}/01/${parseInt(year)-expected_age}`)).to.be.eq(expected_age)
    })
    it('ERROR: Age should throw', () => {
        expect(() => {
            age(10)
        }).to.throws()
    })
})