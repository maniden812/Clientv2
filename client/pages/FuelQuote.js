import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import styles from './FuelQuote.module.css'
import {ProfileNav} from '../components/Navbar/ProfileNav'

class FuelQuote extends Component {
    // Gallons Requested (numeric, required)
    // Delivery Address (Non-editable, comes from client profile)
    // Delivery Date (Calender, date picker)
    // Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
    // Total Amount Due (numeric non-editable, calculated (gallons * price))
    constructor(props) {
        super(props)

        this.state = {
            gals: 0,
            deliveryDate: '',
            address: "1234 Cullen Blvd",
            pricegal: 3.50
        };
    }
    handleGallonChange=(event)=>{
        this.setState({
            gals: event.target.value
        })
    }
    handleDateChange=(date) =>{
        this.setState({
            deliveryDate: date
        })
    }
    
    handleSubmit= event =>{
        alert(`${this.state.gals} ${this.state.deliveryDate}`)
        // event.preventDefault();
    }
    render () {
        return (
        <body>
            <ProfileNav/>
            
            
            {/* <label className={styles.headertext}>Fuel Quote</label> */}
            <form className={styles.center} onSubmit={this.handleSubmit}>
            
                <div>
                    
                    {/* gallons requested */}
                    <label>Gallons Requested<br/></label>
                    <input type="number" 
                    value={this.state.gals} 
                    onChange={this.handleGallonChange}/>
                    <br/>
                    {/* delivery Address */}
                    <label><br/>Delivery Address<br/></label>
                    <input address="input" type="text" placeholder="Enter Delivery Address" value= {this.state.address} readOnly= {true}/>
                    <br/>
                    {/* date picker */}
                    
                    <label><br/>Delivery Date<br/></label>
                    <DatePicker
                    placeholderText="Select Date"
                    selected={this.state.deliveryDate}
                    onChange={ this.handleDateChange }
                    name="deliveryDate"
                    dateFormat="MM/dd/yyyy"
                    />
                    <br/>

                    {/* Suggested Price/gal */}
                    <label><br/>Suggested Price/Gallon<br/></label>
                    <input price="input" type="number" placeholder="Suggested Price" value= {this.state.pricegal} readOnly= {true}/>
                    <br/>

                    {/* Amount Due */}
                    <label><br/>Amount Due<br/></label>
                    <input price="input" type="number" placeholder="Total Price" value= {this.state.pricegal} readOnly= {true}/>

                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </body>
        )
    }
}
export default FuelQuote;