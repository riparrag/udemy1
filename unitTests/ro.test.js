describe('1. Pruebas Unitarias Ipasoft', () => {
    
    test('1+1 tiene q ser 2', () => {
        expect( 1+1 ).toBe(2);
    });
    test('1+1+1+1-1 tiene q ser 3', () => {
        expect( 1+1+1+1-1 ).toBe(3);
    });
    test('tiene q undefined', () => {
        expect(undefined).toBeUndefined();
    });
});
describe('2. Pruebas Unitarias Ipasoft', () => {
    
    test('objeto {} debe ser {}', () => {
        expect( {} ).toStrictEqual({});
        expect( {} ).toEqual({});
    });
    
    test('test arrays', () => {
        const array = ['ipa',22];        
        expect( {...array} ).toBeInstanceOf(Object);
        expect( {...array} ).toEqual({'0':'ipa','1':22});
    });

});
