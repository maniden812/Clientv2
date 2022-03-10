
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Profile from '../pages/profile';
// import TestRenderer from 'react-test-renderer';
//const profilemodule = require('../pages/profile');
test('check if values are empty', () => {
    const wrapper = mount( < Profile /> );
    wrapper.invoke('handler')();
    // const instance = wrapper.instance();
    // expect(true).toBe(true);
    const [fullname, address1, address2, city, state, zipcode] = Profile("fullname", "address1", "address2", "adfd", "TX", 77004);

    expect(fullname).not.toBeNull();
    expect(fullname).toBeLessThanOrEqual(50);

    expect(address1).not.toBeNull();
    expect(address1).toBeLessThanOrEqual(100);

    expect(address2).toBeLessThanOrEqual(100);

    expect(city).not.toBeNull();
    expect(city).toBeLessThanOrEqual(100);

    expect(state).not.toBeNull();

    expect(zipcode).not.toBeNull();
    expect(zipcode).toBeLessThanOrEqual(9);
    expect(zipcode).toBeGreaterThanOrEqual(5);
});