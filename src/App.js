import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {


  // const [firstName, setFirstname] = useState("");
  // const [lastName, setLastname] = useState("");


  // console.log(firstName);
  // console.log(lastName);

  // function onChangeHandler(event) {
  // setFirstname(event.target.value);
  // }
  // function LastnameChangeHandler(event) {
  //   setLastname(event.target.value);
  // }



  const [formData , setFormData] = useState(
    {
      firstName:"", lastName:"",email:"",comments:"", isVisible:true ,mode:"",favCar:""
    }
  );
  // console.log(formData.email);
  // console.log(formData);
  function onChangeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value

      }
    });

    function SubmitHandler(event)  {
         event.preventDefault();
         console.log("all data is below");
         console.log(formData);
    }
  }
  return (
    <div className="App">
      <form onSubmit={SubmitHandler}>


        <input
        type="text"
        placeholder = "first Name"
        onChange={onChangeHandler} name="firstName"
        value={formData.firstName}></input>


<input
        type="text"
        placeholder = "Last Name"
        onChange={onChangeHandler} name="lastName"
        value={formData.lastName}></input>



        <br></br>
        <br></br>
      
        <input
        type="email"
        placeholder = "Enter your email"
        onChange={onChangeHandler} name="email"
        value={formData.email}>
        </input>

        <br></br>
        
        <textarea

        placeholder='commentd'
        onChange={onChangeHandler}
        name='comments'
        value={formData.comments}
        ></textarea>

      <br></br>

      <input
      type='checkbox'
      onChange={onChangeHandler}
      name='isVisible'
      id='dikhrha'
      checked={formData.isVisible}
      >
      </input>
      <label htmlFor='dikhrha'>Am i Visible?</label>
         <br></br>

    <fieldset>
      <legend> mode:     </legend>
      <input
         
         type='radio'
         onChange={onChangeHandler}
         name='mode'
         value="online mode"
         id='online-mode'
         checked = {formData.mode== "online-mode"}
         
         >
         </input>
         <label htmlFor='online-mode'>online mode</label>
         <input
         
         type='radio'
         onChange={onChangeHandler}
         name='mode'
         value="offline mode"
         id='offline-mode'
         checked = {formData.mode== "offline-mode"}
         
         >
         </input>
         <label htmlFor='offline-mode'>offline mode</label>
  
    </fieldset>



         <br/>

      
         <label htmlFor='favCar'>tell me your car</label>
      <select 
       onChange = {onChangeHandler}
       name='favCar'
       value={formData.favCar}
       id='favcar'
       >
       
       <option value='scarpio'>scarpio</option>
       <option value='bullet'>bullet</option>
       <option value='nocar'>nocar</option>
       <option value='av'>avh</option>
       <option value='pa'>pa</option>
       <option value='hjbiub'>ghh</option>
      </select>



     <br></br>

     {/* /* <input type='submit' value="submit" /> */ }


     <button>Submit</button>



      </form>
    </div>

  
  );
}

export default App;
