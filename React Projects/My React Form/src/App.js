import React, { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState(
    {firstName:"",lastName:"",email:"",country:"India",address:"",city:"",state:"",
    pincode:"",isCommented:false,isCandidate:false,isOffer:false,radio:""}
  )

  function changeHandler(event) {
    const {name,type,value,checked} = event.target;

    setFormData((prevData) => {
      return{
        ...prevData,
        [name]:type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(formData);
    setFormData({
      firstName: "", lastName: "", email: "", country: "India", address: "", city: "",
      state: "", pincode: "", isCommented: false, isCandidate: false, isOffer: false, radio: ""
    });
  }

  return (
    <div className="form-container" onSubmit={submitHandler}>
      <form className="main-form">
        <label htmlFor="firstName" >Firstname</label>
        <input type="text" placeholder="Enter FirstName" onChange={changeHandler} 
        name="firstName" value={formData.firstName} id="firstName" />

        <label htmlFor="lastName" >Lastname</label>
        <input type="text" placeholder="Enter LastName" onChange={changeHandler} 
        name="lastName" value={formData.lastName} id="lastName" />

        <label htmlFor="firstName" >Email Address</label>
        <input type="email" placeholder="Enter e-mail" onChange={changeHandler} 
        name="email" value={formData.email} id="email" />

        <label htmlFor="country">Select Country</label>
        <select name="country" id="country" onChange={changeHandler} value={formData.country}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>

        <label htmlFor="address" >Address</label>
        <input type="text" placeholder="e.g.  Street, Area, Colony, etc." 
        onChange={changeHandler} name="address" value={formData.address} id="address" />

        <label htmlFor="city" >City</label>
        <input type="text" placeholder="Enter City" onChange={changeHandler} 
        name="city" value={formData.city} id="city" /> 

        <label htmlFor="state" >State</label>
        <input type="text" placeholder="Enter State" onChange={changeHandler} 
        name="state" value={formData.state} id="state" /> 

        <label htmlFor="pincode" >PIN Code</label>
        <input type="text" placeholder="Enter PIN" onChange={changeHandler} 
        name="pincode" value={formData.pincode} id="pincode" />

        <fieldset className="checkbox-container">
          <legend>By Email</legend>

          <div className="checkboxes">
            <input type="checkbox" onChange={changeHandler} 
            name="isCommented" checked={formData.isCommented} id="isCommented" />
            <div className="description">
              <label htmlFor="isCommented" >Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="checkboxes">
            <input type="checkbox" onChange={changeHandler} 
            name="isCandidate" checked={formData.isCandidate} id="isCandidate" />
            <div className="description">
              <label htmlFor="isCandidate" >Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="checkboxes">
            <input type="checkbox" onChange={changeHandler} 
            name="isOffer" checked={formData.isOffer} id="isOffer" />
            <div className="description">
              <label htmlFor="isOffer" >Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <div className="push-notification">
          
        </div>

        <fieldset className="radio-container">
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <div className="radio-btns">
            <input type="radio" name="radio" onChange={changeHandler}
            id="everything" checked={formData.radio === "everything"} value="everything" />
            <label htmlFor="everything">Everything</label>
          </div>

          <div className="radio-btns">
            <input type="radio" name="radio" onChange={changeHandler}
            id="same-as-email" checked={formData.radio === "same-as-email"} value="same-as-email" />
            <label htmlFor="same-as-email">Same as email</label>
          </div>

          <div className="radio-btns">
            <input type="radio" name="radio" onChange={changeHandler}
            id="no-push-notification" checked={formData.radio === "no-push-notification"} value="no-push-notification" />
            <label htmlFor="no-push-notification">No push notifications</label>
          </div>
        </fieldset>

        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default App;
