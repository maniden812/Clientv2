//test form for the fuel quote form and make it verified
//pricing module and make sure it has good math

// const { default: FuelQuote } = require('../pages/FuelQuote');
// const fuelForm = require('../pages/FuelQuote');
// // const sum = require('./pricingmodule');

// test('Should return a good report', () => {
    
// });
// test('Checks the price of out of state price', () => {
//     expect(FuelQuote()).toBeCloseTo(3042.9,5);
// });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FuelQuote from '../pages/FuelQuote';
import DatePicker from 'react-datepicker';

describe('<FuelQuote /> with proper props', () => {
    const client2 = {
        gallons: 2,
        address: '1234 Cullen Blvd Houston, TX 77004', //validate that its just there
        // deliveryDate: '05/21/2022',
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
        "readOnly":true,
        "name":"address",
        });
    });   

    // it('should have proper props for deliveryDate field', () => {
    //     expect(container.find('DatePicker[name="deliveryDate"]').props()).toEqual({
    //         "placeholderText":"Select Date",
    //         "dateFormat":"MM/dd/yyyy",
    //         "selected":"deliveryDate",
    //         "name":"deliveryDate",
    //         "onChange": expect.any(Function),
    //         "required": true
    //     });
    // });

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
});

// function fuelQuoteCheck(){
//     // var name  = document.getElementById('name').value;
//     var gallons   = document.getElementById('gallons').value;
//     var date = document.getElementById('date').value;
//     var errorMsg = '';

//     if (gallons.length===0){
//         errorMsg += 'Empty gallons\n';    
//     } else if (isNaN(Number(age))){
//         errorMsg += 'Invalid gallons - enter a number\n';    
//     }
//     currentDate= new Date();

//     if (date.getFullYear()<currentDate.getFullYear()){
//         errorMsg = 'Year has passed';    
//     } 
//     else if (date.getFullYear()==currentDate.getFullYear()){
//         if(date.getMonth()<currentDate.getMonth()){
//         errorMsg = 'Month has passed';    
//        }
//     }
//     else if (date.getFullYear()==currentDate.getFullYear()
//         && (date.getMonth()==currentDate.getMonth())){
//             if(date.getDate()<currentDate.getDate()){
//                 errorMsg = 'Day has passed';    
//                }
//        }
    
    

//     if (errorMsg.length > 0){
//         alert(errorMsg);
//         return false;
//     }
// }
// export default function SignIn({ csrfToken }) {
//   return (
//     <form method="post" onSubmit={() => signIn("credentials", {
//         redirect: false, 
//         email: "test",
//         password: "test",
//       })
//       .then((error) => console.log(error))
//       .catch((error) => console.log(error))} >
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Username
//         <input name="username" type="text" />
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   )
// }

// // This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   }
// }