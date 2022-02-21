import React, { Component } from 'react'
import styles from './profile.module.css'
import {ProfileNav} from '../components/Navbar/ProfileNav'

class Profile extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    

    // changes value of fullname when user is inputting
    handleFullnameChange = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }

    // changes value of address1 when user is inputting
    handleAddress1 = (event) => {
        this.setState({
            address1: event.target.value
        })
    }

    // changes value of address2 when user is inputting
    handleAddress2 = (event) => {
        this.setState({
            address2: event.target.value
        })
    }

    // changes value of city when user is inputting
    handleCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    // changes value of state when user is selecting
    handleState = (event) => {
        this.setState({
            state: event.target.value
        })
    }

    // changes value of zipcode when user is selecting
    handleZipcode = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    //keeps entered info same when confirm is clicked
    handleSubmit = event => {
        alert(`${this.state.fullname} ${this.state.address1} ${this.state.address2} ${this.state.city} ${this.state.state} ${this.state.zipcode}`)
        event.preventDefault()
    }

    render() {
            return ( 
                // <body> { /* main banner */ } 
                // <div className = { styles.mainbanner }>
                // <h1 className = { styles.header } > FuelQuote </h1> 
                // </div>

                // { /* smaller banner*/ } 
                // <div className = { styles.smallbanner }>
                // <h2 className = { styles.form } > FuelQuote Form </h2> 
                // <h2 className = { styles.profile } > Profile </h2> 
                // <h2 className = { styles.history } > FuelQuote History </h2> 
                // </div>
                <body>
                    <ProfileNav/>
                    
                    
                    

                { /* <label className={styles.headertext}>Fuel Quote</label> */ } 
                <form className = { styles.center } onSubmit = { this.handleSubmit } >
                <div> { /* type in full name */ } 
                <label > Full Name </label>  
                <br/>
                <input type = 'text' value = { this.state.username } maxlength = '50' onChange = { this.handleFullnameChange }/> 
                <br/>
                <br/>

                { /* type in address 1 */ } 
                <label> Address 1 </label>  
                <br/>
                <input type = 'text' value = { this.state.address1 } maxlength = '100' onChange = { this.handleAddress1 }/> 
                <br/>
                <br/>

                { /* type in address 2 */ } 
                <label> Address 2 </label>  
                <br/>
                <input type = 'text' value = { this.state.address2 } maxlength = '100' onChange = { this.handleAddress2 }/> 
                <br/>
                <br/>

                { /* type in city */ } 
                <label> City </label>  
                <br/>
                <input type = 'text' value = { this.state.city } maxlength = '100' onChange = { this.handleCity }/> 
                <br/>
                <br/>

                { /* select state */ } 
                <label> Select State </label> 
                <select value = { this.state.topic } onChange = { this.handleState } >
                <option value = "AL" > AL </option> 
                <option value = "AK" > AK </option> 
                <option value = "AZ" > AZ </option> 
                <option value = "AR" > AR </option> 
                <option value = "CA" > CA </option> 
                <option value = "CO" > CO </option> 
                <option value = "CT" > CT </option> 
                <option value = "DE" > DE </option> 
                <option value = "DC" > DC </option> 
                <option value = "FL" > FL </option> 
                <option value = "GA" > GA </option> 
                <option value = "HI" > HI </option> 
                <option value = "ID" > ID </option> 
                <option value = "IL" > IL </option> 
                <option value = "IN" > IN </option> 
                <option value = "IA" > IA </option> 
                <option value = "KS" > KS </option> 
                <option value = "KY" > KY </option> 
                <option value = "LA" > LA </option> 
                <option value = "ME" > ME </option> 
                <option value = "MD" > MD </option> 
                <option value = "MA" > MA </option> 
                <option value = "MI" > MI </option> 
                <option value = "MN" > MN </option> 
                <option value = "MS" > MS </option> 
                <option value = "MO" > MO </option> 
                <option value = "MT" > MT </option> 
                <option value = "NE" > NE </option> 
                <option value = "NV" > NV </option> 
                <option value = "NH" > NH </option> 
                <option value = "NJ" > NJ </option> 
                <option value = "NM" > NM </option> 
                <option value = "NY" > NY </option> 
                <option value = "NC" > NC </option> 
                <option value = "ND" > ND </option> 
                <option value = "OH" > OH </option> 
                <option value = "OK" > OK </option> 
                <option value = "OR" > OR </option> 
                <option value = "PA" > PA </option> 
                <option value = "RI" > RI </option> 
                <option value = "SC" > SC </option> 
                <option value = "SD" > SD </option> 
                <option value = "TN" > TN </option> 
                <option value = "TX" > TX </option> 
                <option value = "UT" > UT </option> 
                <option value = "VT" > VT </option> 
                <option value = "VA" > VA </option> 
                <option value = "WA" > WA </option> 
                <option value = "WV" > WV </option> 
                <option value = "WI" > WI </option> 
                <option value = "WY" > WY </option> 
                </select> 
                <br/>
                <br/>

                { /* type in zipcode */ } 
                <label> Zipcode </label>  
                <br/>
                <input type = 'text' value = { this.state.zipcode } maxlength = '9' minlength = '5' onChange = { this.handleZipcode }/> 
                <br/>
                <br/>

                { /* button for confirm */ } 
                <button className = { styles.button } type = "submit" > Confirm </button> 
                </div> 
                </form> 
                </body>
            )
        }
    }


export default Profile