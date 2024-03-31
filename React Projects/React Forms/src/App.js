import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState( 
    {firstName:"", lastName:"", email:"",comments:"",isVisible:false,mode:"",favCar:""} 
  )

  function changehandler(event) {
    const {name,value,type,checked} = event.target
  
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  // console.log(formData.firstName)

  function submitHandler(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="First Name"
        name="firstName" onChange={changehandler} value={formData.firstName} />

        <br/><br/>

        <input type="text" placeholder="Last Name"
        name="lastName" onChange={changehandler} value={formData.lastName} />

        <br/><br/>

        <input type="email" placeholder="E-mail"
        name="email" onChange={changehandler} value={formData.email} />

        <br/><br/>

        <textarea placeholder="comments" onChange={changehandler} name="comments" 
        value={formData.comments} />

        <br/><br/>

        <input type="checkbox" onChange={changehandler} id="isVisible" name="isVisible"
         checked={formData.isVisible} />
        <label htmlFor="isVisible">Is this visible?</label>

        <br/><br/>

        <fieldset>
          <legend>Mode:</legend>

          <input type="radio" name="mode" onChange={changehandler} value="Online-Mode" id="Online-Mode" 
          checked={formData.mode === "Online-Mode"} />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input type="radio" name="mode" onChange={changehandler} value="Offline-Mode" id="Offline-Mode" 
          checked={formData.mode === "Offline-Mode"} />
          <label htmlFor="Offline-Mode">Offline Mode</label>

          <input type="radio" name="mode" onChange={changehandler} value="Hybrid-Mode" id="Hybrid-Mode" 
          checked={formData.mode === "Hybrid-Mode"} />
          <label htmlFor="Hybrid-Mode">Hybrid Mode</label>
        </fieldset>

        <br/><br/>

        <select onChange={changehandler} name="favCar" id="favCar" value={formData.favCar}>
          <option value="">--Select Car--</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Audi">Audi</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Defender">Defender</option>
        </select>

        <br/><br/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
