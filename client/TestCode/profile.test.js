
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Profile from '../pages/profile';
import 'jsdom-global/register';
import { WrappedBuildError } from 'next/dist/server/base-server';
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"


describe('<Profile /> with props', () => {
    const client1 = {
        fullname: 'hello',
        address1: 'jfkhsdajhf',
        address2: 'fdjlkas',
        city: 'houston',
        state: 'TX',
        zipcode: '77003'
    };
    const container = shallow(<Profile {...client1} />);
  
    it('should have proper props for fullname field', () => {
      expect(container.find('input[name="fullname"]').props()).toEqual({
        "maxlength": "50",
        "id": "fl",
        "name": "fullname",
        "required": true,
        "onChange": expect.any(Function),
        "type": "text",
        "value":"",
        
      });
    });
    it('should have proper props for address1 field', () => {
        expect(container.find('input[name="address1"]').props()).toEqual({
          "maxlength": "100",
          "name": "address1",
          "id": "a1",
          "required": true,
          "onChange": expect.any(Function),
          "type": "text",
          "value": "",
        });
    });
    it('should have proper props for address2 field', () => {
        expect(container.find('input[name="address2"]').props()).toEqual({
            "maxlength": "100",
            "id": "a2",
            "name": "address2",
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
    it('should have proper props for city field', () => {
        expect(container.find('input[name="city"]').props()).toEqual({
            "maxlength": "100",
            "name": "city",
            "required": true,
            "id": "city",
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
    it('should have proper props for zipcode field', () => {
        expect(container.find('input[name="zipcode"]').props()).toEqual({
            "maxlength": "9",
            "minlength": "5",
            "id": "zip",
            "name": "zipcode",
            "required": true,
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
});
describe('The form is submitted when the click event is fired by simulated click on the submit button', () => {
    
    it('tests if the submit button is triggering an event', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<Profile onSubmit={mockCallBack()} />);
        wrapper.find("#submit-button").simulate("click");
        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
});
describe('the form submitting info with the button', () => {
const simulateOnChangeInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate("change", {
        target: { value: newValue },
    });
    
    return wrapper.find(inputSelector);
    };
    
    it("fill the form with values and then submit the form", () => {
        const wrapper = shallow(<Profile />);
    
        const fl = simulateOnChangeInput(
        wrapper,
        "#fl",
        "Ma Che Vin"
        );
        const a1 = simulateOnChangeInput(
        wrapper,
        "#a1",
        "hello"
        );
        const a2 = simulateOnChangeInput(
        wrapper,
        "#a2",
        "hello pt2"
        );
        const ct = simulateOnChangeInput(
        wrapper,
        "#city",
        "nashua"
        );
        const st = simulateOnChangeInput(
        wrapper,
        "#st",
        "NY"
        );
        const zipc = simulateOnChangeInput(
        wrapper,
        "#zip",
        "78372"
        );
        
        expect(fl.props().value).toBe("Ma Che Vin");
        expect(a1.props().value).toBe("hello");
        expect(ct.props().value).toBe("nashua");
        expect(a2.props().value).toBe("hello pt2");
        expect(st.props().value).toBe("NY");
        expect(zipc.props().value).toBe("78372");
    
        wrapper.find("#submit-button").simulate("submit");
    
        expect(wrapper.find("#fl").props().value).toBe("Ma Che Vin");
        expect(wrapper.find("#a1").props().value).toBe("hello");
        expect(wrapper.find("#city").props().value).toBe("nashua");
        expect(wrapper.find("#a2").props().value).toBe("hello pt2");
        expect(wrapper.find("#st").props().value).toBe("NY");
        expect(wrapper.find("#zip").props().value).toBe("78372");
    });
        

});