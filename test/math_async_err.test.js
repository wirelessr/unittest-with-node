const expect = require('chai').expect;
// import math file
const math = require('../math_async_err');
describe('math_async_err.js tests', () => {
    describe('math.add() Test', () => {
        it('should throw an error', async () => {
            try {
                await math.add(1);
            } catch (error) {
                expect(error).to.equal('missing arg');
            }
        });
    });
    
});



