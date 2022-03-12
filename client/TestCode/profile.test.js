
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Profile from '../pages/profile';
import 'jsdom-global/register';
import { WrappedBuildError } from 'next/dist/server/base-server';

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
          "required": true,
          "onChange": expect.any(Function),
          "type": "text",
          "value": "",
        });
    });
    it('should have proper props for address2 field', () => {
        expect(container.find('input[name="address2"]').props()).toEqual({
            "maxlength": "100",
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
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
    it('should have proper props for zipcode field', () => {
        expect(container.find('input[name="zipcode"]').props()).toEqual({
            "maxlength": "9",
            "minlength": "5",
            "name": "zipcode",
            "required": true,
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
});
describe('The form is submitted when the click event is fired by simulated click on the submit button', () => {
    // const client1 = {
    //     fullname: 'Ma Che Vin',
    //     address1: 'PGH',
    //     address2: 'Cullen',
    //     city: 'Austin',
    //     state: 'NY',
    //     zipcode: '77293',
    //     // handleSubmit: jest.fn(),
    // }
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Profile onSubmit={mockCallBack()} />);
    wrapper.find("#submit-button").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    
    // expect(mockCallBack).toHaveBeenLastCalledWith({
    //     fullname: client1.fullname,
    //     address1: client1.address1,
    //     address2: client1.address2,
    //     city: client1.city,
    //     state: client1.state,
    //     zipcode: client1.zipcode,
    // });
    // const container = shallow(<Profile {...client1} />);
    // it('should submit info', () => {
    //     expect(container.find(client.fullname).toEqual(client1.fullname));
    // });
    // const onSubmit= jest.fn();
    // const wrapper= mount( <form onSubmit={onSubmit}/>);
    // const button = wrapper.find('#submitting-form').simulate('submit');
    
    // const spy=jest.fn();
    // const wrapper = shallow (<Profile dispatch ={spy}/>);
    // // before(() => wrapper.find('form').simulate('submit'))
    // it('check if vars are changed',() =>{
    //     expect(spy).toHaveBeenLastCalledWith({
    //         fullname: client.fullname,
    //         address1: client.address1,
    //         address2: client.address2,
    //         city: client.city,
    //         state: client.state,
    //         zipcode: client.zipcode
    //     });
    // })

    // it('changes submitted state', ()=>{
    //     const component= shallow(<Profile {...client1} />);
    //     component.find('#submitting-form').simulate('click');
    //     expect(client1.handleSubmit).toHaveBeenCalledTimes(1);
    //     expect(client1.handleSubmit).toBeCalledWith({
    //         fullname: client1.fullname,
    //         address1: client1.address1,
    //         address2: client1.address2,
    //         city: client1.city,
    //         state: client1.state,
    //         zipcode: client1.zipcode
    //     });
        
    // });

    // })
    // expect(updatedNameInput.props().value).toBe("Endzela Gaye");
    // expect(updatedHourInput.props().value).toBe("2");
    // expect(updatedJobTitleInput.props().value).toBe("Food supply");

    // // wrapper.find("#reset-button").simulate("click");

    // expect(wrapper.find("#volunteerName-input").props().value).toBe("");
    // expect(wrapper.find("#hours-input").props().value).toBe("");
    // expect(wrapper.find("#job-input").props().value).toBe("Raising funds");
    // // wrapper.find('form') .simulate('submit', { preventDefault () {} });
    //     const mockCallBack = jest.fn();
    
    //     const wrapper = shallow(<Profile onSubmit={mockCallBack()} />);
    
    //     wrapper.find('button').simulate('submit');
    //     expect(mockCallBack).toEqual({
    //         fullname: client1.fullname,
    //         address1: client1.address1,
    //         address2: client1.address2,
    //         city: client1.city,
    //         state: client1.state,
    //         zipcode: client1.zipcode
    // });
  });
//   it("should call handleChange on description change with the correct params", () => {
//     const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
//     wrapper.instance().forceUpdate();
//     const client1 = {
//       target: {
//         fullname: client1.fullname,
//         address1: client1.address1,
//         address2: client1.address2,
//         city: client1.city,
//         state: client1.state,
//         zipcode: client1.zipcode
//       }
//     };
//     wrapper.find(".description-input").simulate("change", client1);
//     expect(spy).toHaveBeenCalledWith(client1);
//   });
it("should call preventDefault", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
