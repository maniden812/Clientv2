// //test form for the fuel quote form and make it verified
// //pricing module and make sure it has good math

// const { default: FuelQuote } = require('../pages/FuelQuote');
// const fuelForm = require('../pages/FuelQuote');
// // const sum = require('./pricingmodule');

    
// });
// test('Checks the price of out of state price', () => {
//     expect(FuelQuote()).toBeCloseTo(3042.9,5);
// });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jsdom-global/register';
import FuelQuote from '../pages/FuelQuote';
import DatePicker from 'react-datepicker';
import { WrappedBuildError } from 'next/dist/server/base-server';
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"


describe('<FuelQuote /> with proper props', () => {
    const client2 = {
        gallons: 2,
        address: '1234 Cullen Blvd Houston, TX 77004', //validate that its just there
        deliveryDate: "2022-03-13",
        pricegal: 5.00, //validate that its just there
        total: 10 //validate that its just there
    };

    const container = shallow(<FuelQuote {...client2} />);
    it('should have proper props for gallons field', () => {
        expect(container.find('input[name="gallons"]').props()).toEqual({
            "type":"number",
            "min":"0",
            "name":"gallons",
            "required":true,
            "value":0,
            "onChange": expect.any(Function),
        });
    });

    it('should have proper props for address field', () => {
        expect(container.find('input[name="address"]').props()).toEqual({
        "address":"input",
        "type":"text",
        "placeholder":"Enter Delivery Address",
        "value":"1234 Cullen Blvd Houston, TX 77004", 
        "name":"address",
        "readOnly":true,
        
        });
    });   

    it('should have proper props for deliveryDate field', () => {
        //const datePicker = component.find('DatePicker')
        expect(container.find('input[name="deliveryDate"]').props()).toEqual({
            "type": "date",
            "placeholderText":"Select Date",
            "min":"2022-03-13",
            "onChange": expect.any(Function),
            "value":"2022-03-13",
            "required":true,
            "name":"deliveryDate"
            
            });
        // expect(container.find('DatePicker[name="deliveryDate"]').value()).toEqual({
        //     "placeholderText":"Select Date",
        //     "dateFormat":"MM/dd/yyyy",
        //     "selected":"deliveryDate",
        //     "name":"deliveryDate",
        //     "onChange": expect.any(Function),
        //     "required": true
        // });
    });

    it('should have proper props for pricegal field', () => {
        expect(container.find('input[name="pricegal"]').props()).toEqual({
        "price": "input",
        "type": "number",
        "value": 3.50,
        "name": "pricegal",
        "placeholder":"Suggested Price",
        "readOnly": true,
        });
    });

    it('should have proper props for total field', () => {
        expect(client2.total).toEqual(client2.gallons*client2.pricegal);
    });
    // describe('The form is submitted when the click event is fired by simulated click on the submit button', () => {
    
    //     it('tests if the submit button is triggering an event', () => {
    //         const mockCallBack = jest.fn();
    //         const wrapper = shallow(<FuelQuote onSubmit={mockCallBack()} />);
    //         wrapper.find("#submit-button").simulate("click");
    //         expect(mockCallBack).toHaveBeenCalledTimes(1);
    //     });
    // });
});
// describe('The form is submitted when the click event is fired by simulated click on the submit button', () => {
    
//     it('tests if the submit button is triggering an event', () => {
//         const mockCallBack = jest.fn();
//         const wrapper = shallow(<FuelQuote onSubmit={mockCallBack()} />);
//         wrapper.find("#submit").simulate("click", {keyCode: 27});
//         expect(mockCallBack).toHaveBeenCalledTimes(1);
//     });
// });
// describe('the form submitting info with the button', () => {
//     const simulateOnChangeInput = (wrapper, inputSelector, newValue) => {
//         const input = wrapper.find(inputSelector);
//         input.simulate("change", {
//             target: { value: newValue },
//         });
        
//         return wrapper.find(inputSelector);
//     };
        
//         it("fill the form with values and then submit the form", () => {
//             const wrapper = shallow(<FuelQuote />);
        
//             const gal = simulateOnChangeInput(
//             wrapper,
//             "#gal",
//             2
//             );
            
//             expect(gal.props().value).toBe(2);
        
//             wrapper.find("#submit").simulate("submit");
        
//             expect(wrapper.find("#gal").props().value).toBe(2);

//         });
            
    
// });

//     expect(address2).toBeLessThanOrEqual(100);

//     expect(city).not.toBeNull();
//     expect(city).toBeLessThanOrEqual(100);

//     expect(state).not.toBeNull();

//     expect(zipcode).not.toBeNull();
//     expect(zipcode).toBeLessThanOrEqual(9);
//     expect(zipcode).toBeGreaterThanOrEqual(5);

// });
// test('Checks the price of out of state price', () => {
//     expect(FuelQuote()).toBeCloseTo(3042.9,5);
// });

// // function fuelQuoteCheck(){
// //     // var name  = document.getElementById('name').value;
// //     var gallons   = document.getElementById('gallons').value;
// //     var date = document.getElementById('date').value;
// //     var errorMsg = '';

// //     if (gallons.length===0){
// //         errorMsg += 'Empty gallons\n';    
// //     } else if (isNaN(Number(age))){
// //         errorMsg += 'Invalid gallons - enter a number\n';    
// //     }
// //     currentDate= new Date();

// //     if (date.getFullYear()<currentDate.getFullYear()){
// //         errorMsg = 'Year has passed';    
// //     } 
// //     else if (date.getFullYear()==currentDate.getFullYear()){
// //         if(date.getMonth()<currentDate.getMonth()){
// //         errorMsg = 'Month has passed';    
// //        }
// //     }
// //     else if (date.getFullYear()==currentDate.getFullYear()
// //         && (date.getMonth()==currentDate.getMonth())){
// //             if(date.getDate()<currentDate.getDate()){
// //                 errorMsg = 'Day has passed';    
// //                }
// //        }
    
    

// //     if (errorMsg.length > 0){
// //         alert(errorMsg);
// //         return false;
// //     }
// // }
// // export default function SignIn({ csrfToken }) {
// //   return (
// //     <form method="post" onSubmit={() => signIn("credentials", {
// //         redirect: false, 
// //         email: "test",
// //         password: "test",
// //       })
// //       .then((error) => console.log(error))
// //       .catch((error) => console.log(error))} >
// //       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
// //       <label>
// //         Username
// //         <input name="username" type="text" />
// //       </label>
// //       <label>
// //         Password
// //         <input name="password" type="password" />
// //       </label>
// //       <button type="submit">Sign in</button>
// //     </form>
// //   )
// // }

// // // This is the recommended way for Next.js 9.3 or newer
// // export async function getServerSideProps(context) {
// //   return {
// //     props: {
// //       csrfToken: await getCsrfToken(context),
// //     },
// //   }
// // }