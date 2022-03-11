
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Profile from '../pages/profile';
import 'jsdom-global/register';

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
        "onChange": expect.any(Function),
        "type": "text",
        "value":"",
        
      });
    });
    it('should have proper props for fullname field', () => {
        expect(container.find('input[name="fullname"]').props()).toEqual({
          "maxlength": "50",
          "name": "fullname",
          "onChange": expect.any(Function),
          "type": "text",
          "value": "",
        });
    });
    it('should have proper props for address1 field', () => {
        expect(container.find('input[name="address1"]').props()).toEqual({
          "maxlength": "100",
          "name": "address1",
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
            "onChange": expect.any(Function),
            "type": "text",
            "value": "",
        });
    });
});
describe('Should call onSubmit prop for valid form submission', () => {
    const client = {
        fullname: 'Ma Che Vin',
        address1: 'PGH',
        address2: 'Cullen',
        city: 'Austin',
        state: 'NY',
        zipcode: '77293'
    }
  
    const onSubmitSpy = jest.fn();
  
    const wrapper = shallow(
      <Profile client={client} onSubmit={onSubmitSpy} />
    );
  
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  
    // expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        fullname: client.fullname,
        address1: client.address1,
        address2: client.address2,
        city: client.city,
        state: client.state,
        zipcode: client.zipcode
    });
  });
