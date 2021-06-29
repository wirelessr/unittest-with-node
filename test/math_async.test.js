const expect = require('chai').expect;
// import math file
const math = require('../math_async');
describe('math_async.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', async () => {
            const result = await math.add(1, 1);
            expect(result).to.equal(2);
        });
    });
    
});


