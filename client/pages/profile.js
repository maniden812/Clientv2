import React, { Component , useState} from 'react'
import styles from './profile.module.css'
import {ProfileNav} from '../components/Navbar/ProfileNav'
// import { ClientRequest } from 'http'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const Profile =()=> {
    const [clients, setClients]=useState()
    const [addFormData, setFormData]= useState({
        fullname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: ''
    
    })
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         fullname: '',
    //         address1: '',
    //         address2: '',
    //         city: '',
    //         state: '',
    //         zipcode: ''
    //     }
    // }

    const handleFormChange= (event)=>{
        event.preventDefault();

        const fieldName= event.target.getAttribute('name');
        const fieldValue= event.target.value;

        const newFormData= {...addFormData};
        newFormData[fieldName]= fieldValue;

        setFormData(newFormData);
    }

    // // changes value of fullname when user is inputting
    // const handleFullnameChange = (event) => {
    //     this.setState({
    //         fullname: event.target.value
    //     })
    // }

    // // changes value of address1 when user is inputting
    // const handleAddress1 = (event) => {
    //     this.setState({
    //         address1: event.target.value
    //     })
    // }

    // // changes value of address2 when user is inputting
    // const handleAddress2 = (event) => {
    //     this.setState({
    //         address2: event.target.value
    //     })
    // }

    // // changes value of city when user is inputting
    // const handleCity = (event) => {
    //     this.setState({
    //         city: event.target.value
    //     })
    // }

    // // changes value of state when user is selecting
    // handleState = (event) => {
    //     this.setState({
    //         state: event.target.value
    //     })
    // }

    // // changes value of zipcode when user is selecting
    // handleZipcode = (event) => {
    //     this.setState({
    //         zipcode: event.target.value
    //     })
    // }

    //keeps entered info same when confirm is clicked
    // const handleSubmit = event => {
    //     alert(`${fullname} ${address1} ${address2} ${city} ${state} ${zipcode}`)
    //     event.preventDefault()
    // }
    const handleSubmit = (event) =>{
        const newClient= {
            fullname: addFormData.fullname,
            address1: addFormData.address1,
            address2: addFormData.address2,
            city: addFormData.city,
            state: addFormData.state,
            zipcode: addFormData.zipcode
        };
        setClients(newClient);
    };

    return ( 
                
        <body>
            <ProfileNav/>
                
                
            <form className = { styles.center } onSubmit = { handleSubmit } >
                <div> { /* type in full name */ } 
                    <label > Full Name </label>  
                    <br/>
                    <input type = 'text' 
                    name="fullname"
                    // value = { fullname } 
                    maxlength = '50' 
                    onChange = { handleFormChange }/> 
                    <br/>
                    <br/>

                    { /* type in address 1 */ } 
                    <label> Address 1 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address1"
                    // value = { address1 } 
                    maxlength = '100' 
                    onChange = { handleFormChange }/> 
                    <br/>
                    <br/>

                    { /* type in address 2 */ } 
                    <label> Address 2 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address2"
                    // value = { address2 } 
                    maxlength = '100' 
                    onChange = { handleFormChange }/> 
                    <br/>
                    <br/>

                    { /* type in city */ } 
                    <label> City </label>  
                    <br/>
                    <input type = 'text' 
                    name="city"
                    // value = { city } 
                    maxlength = '100' 
                    onChange = {handleFormChange}/> 
                    <br/>
                    <br/>

                    { /* select state */ } 
                    <label> Select State </label> 
                    {/* value = { topic } */}
                    <select name="state" onChange = { handleFormChange } >
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
                    <input type = 'text' 
                    name="zipcode"
                    // value = { zipcode } 
                    maxlength = '9' 
                    minlength = '5' 
                    onChange = { handleFormChange }/> 
                    <br/>
                    <br/>

                    { /* button for confirm */ } 
                    <button className = { styles.button } type = "submit" > Confirm </button> 
                </div> 
            </form> 

        </body>
    )
}
    


export default Profile