const { render } = require("@testing-library/react");
const { doesNotReject } = require("assert");

describe('Pruebas de componentes', () => {
    
    test('Test <CheckComponent/>', () => {
        
        render(<CheckComponent/>);

    });

});