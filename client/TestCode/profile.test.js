
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Profile from '../pages/profile';

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

    // describe('<Profile /> with no props', () => {
    //     const container = shallow(<Profile />);
    //     it('should match the snapshot', () => {
    //       expect(container.html()).toMatchSnapshot();
    //     });

    it('should have proper props for fullname field', () => {
      expect(container.find('input[name="fullname"]').props()).toEqual({
        "maxlength": "50",
        "name": "fullname",
        "onChange": expect.any(Function),
        "type": "text",
      });
    });
    it('should have proper props for fullname field', () => {
        expect(container.find('input[name="fullname"]').props()).toEqual({
          "maxlength": "50",
          "name": "fullname",
          "onChange": expect.any(Function),
          "type": "text",
        });
    });
    it('should have proper props for address1 field', () => {
        expect(container.find('input[name="address1"]').props()).toEqual({
          "maxlength": "100",
          "name": "address1",
          "onChange": expect.any(Function),
          "type": "text",
        });
    });
    it('should have proper props for address2 field', () => {
        expect(container.find('input[name="address2"]').props()).toEqual({
            "maxlength": "100",
            "name": "address2",
            "onChange": expect.any(Function),
            "type": "text",
        });
    });
    it('should have proper props for city field', () => {
        expect(container.find('input[name="city"]').props()).toEqual({
            "maxlength": "100",
            "name": "city",
            "onChange": expect.any(Function),
            "type": "text",
        });
    });
    it('should have proper props for zipcode field', () => {
        expect(container.find('input[name="zipcode"]').props()).toEqual({
            "maxlength": "9",
            "minlength": "5",
            "name": "zipcode",
            "onChange": expect.any(Function),
            "type": "text",
        });
    });
    // it('should set the fullname value on change event', () => {
    //     container.find('input[type="fullname"]').simulate('change', {
    //       target: {
    //         value: 'theNewFullName',
    //       },
    //     });
    //     expect(container.find('input[type="fullname"]').prop('value')).toEqual(
    //       'theNewFullName',
    //     );
    // });

    // it('should call the dispatch function and disable the submit button on button click', () => {
    // container.find('input[type="button"]').simulate('click');
    // expect(
    //     container.find('input[type="button"]').prop('disabled'),
    // ).toBeTruthy();
    // expect(initialProps.dispatch).toHaveBeenCalledTimes(1);
    // });
    //TODO find a way to test the states selection 


    // it('should have proper props for state field', () => {
    //     expect(container.find('select[name="state"]').props()).toEqual({
            
            
    //         "name": "state",
    //         "onChange": expect.any(Function)
    //     });
    // });

    
    // it('should have proper props for submit button', () => { /* */ });
});








// import TestRenderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
//const profilemodule = require('../pages/profile');
// describe("rendering comp", ()=>{
//     it("renders profile w/o crashing", ()=>{
//         const wrapper = shallow( < Profile /> );
//         const instance = wrapper.instance();
//     });
//     it("looks at fullname to see if it is a full name", ()=>{
//         const client = {
//             fullname: 'fullname',
//             address1: 'address1',
//             address2: 'address2',
//             city: 'city',
//             state: 'TX',
//             zipcode: 'zipcode',
//           };


//     })
// })