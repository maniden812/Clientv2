import React, { Component ,useState } from 'react'
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import styles from './FuleQuote.module.css'
import {ProfileNav} from '../components/Navbar/ProfileNav'
import Hist  from "../components/FuelQuoteTable/FuelQuoteTable"

function FuleQuote(){
    
    const [gallons, setGallons]=useState(0)
    const [deliveryDate, setdeliveryDate]=useState(new Date())
    const [address]=useState("1234 Cullen Blvd Houston, TX 77004")
    const [pricegal]=useState(3.50)
    const [total, setTotal]=useState(0)
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    // }

    // const handleGallonChange=(event)=>{
    //     this.setState({
    //         gallons: event.target.value
    //     })
    // }
    // const handleDateChange=(date)=>{
    //     this.setState({
    //         deliveryDate: JSON.stringify(date)
    //     })
    // }
    
   

    // const handleTotalChange=(event) =>{
    //     this.setState({
    //         total: {...this.gallons * this.pricegal}
    //     })
    // }
    
    // const handleSubmit= event =>{
    //     alert(`${this.state.gallons} ${this.state.deliveryDate}`)
    //     // event.preventDefault();
    // }
    
        return (
        <body>
            <ProfileNav/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            
            
            <div className={styles.formStuff}>
                <form className={styles.center}>
                
                    <div>
                        
                        {/* gallons requested */}
                        <label className={styles.des}>Gallons Requested<br/></label>
                        <input type="number" 
                        value={gallons} 
                        onChange={(gal)=>setGallons(gal.target.value)}/>
                        <br/>

                        {/* delivery Address */}
                        <label className={styles.des}><br/>Delivery Address</label>
                        <p className={styles.border}> {address} </p>

                        {/* date picker */}
                        <label className={styles.des}>Delivery Date<br/></label>
                        <br/>

                        <DatePicker
                        placeholderText="Select Delivery Date"
                        selected={deliveryDate}
                        onChange={(date) => setdeliveryDate(date)} 
                        
                        />
                                
                        <br/>

                        {/* Suggested Price/gal
                        <label><br/>Suggested Price/Gallon<br/></label>
                        <p>{this.state.priceGals}</p>
                        <br/> */}

                        {/* Amount Due */}
                        <label className={styles.des}><br/>Amount Due<br/></label>
                        
                        <input type="number" 
                        value={{gallons} * {pricegal}} 
                        onChange={(t)=>setTotal(t.target.value)}
                        readOnly="true"
                        />
                        <br/>
                      

                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <div className={styles.container}>
                    <Hist 
                        name= "Machevin"
                        address= {address}
                        gallons= {gallons}
                        deliveryDate={deliveryDate}
                        total= {total}
                    />
                </div>
            </div>
        </body>
        )
    }

export default FuleQuote;