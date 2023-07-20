import './App.css';
import {useState} from "react";



function App() {
  const initialvalues={name:"",account:"",ifsc:'',branch:'',mobile:''};
  const [formValues,serformValues]=useState(initialvalues);
  const [formErrors,setformErrors]=useState({});

  const HandleChange=(e)=>{
    const {name,value}=e.target;
    serformValues({...formValues,[name]:value});
    console.log(formValues);
  }

  return(
      <div>
        <h2>REGISTERATION</h2>
        <div>
          <input type='text'placeholder='Enter the name' value={formValues.name} onChange={HandleChange}/>
        </div>
      </div>
  )
  

}


export default App;
