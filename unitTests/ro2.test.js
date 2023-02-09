const { doesNotReject } = require("assert");

describe('1. Pruebas async', () => {
    
    test('1+1 tiene q ser 2', (done) => {
        
        expect( 1+1 ).toBe(2);

        done();
    });
    
});