import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import { createShallow } from '@material-ui/core/test-utils';
import CurrencyCodeInput from "../../components/CurrencyCodeInput";

describe("CurrencyCodeInput", () => {
    let shallow;
    beforeAll(() => {  // This is Mocha; in Jest, use beforeAll
        shallow = createShallow();
    });
    it("onchangeprop should get called on simulating  changes in select element", () => {
        const props = {
            cryptoCode: 'ABC',
            onChangeCryptoCode: jest.fn()
        }
        const wrapper = shallow(<CurrencyCodeInput {...props} />);
        console.log('', JSON.stringify(wrapper.find('select')));
        wrapper
        .find(NativeSelect)
        .simulate("change", { target: { value: 'BTC' } });
    
        expect(props.onChangeCryptoCode).toHaveBeenCalled();
    });
});