import './App.css';
import { useState } from "react";


function App() {

  const initialValues = { name: "", account: "", ifsc: '', branch: '', mobile: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  
    const showAlert = () => {
      alert("Beneficiary Successfully Added");
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const HandleSubmit =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
  }
  const validate=(values)=>{
    const errors={};
    if(!values.name){
      errors.name="Name is required";
    }
    if(!values.account){
        errors.account="Account is required";   
    }
    if(!values.ifsc){
      errors.ifsc="IFSC is required";   
  }
  if(!values.branch){
    errors.branch="Branch is required";   
}
if(!values.mobile){
  errors.mobile="Mobile is required";   
}
return errors
  }

 

 

  return (
    <div className='container'>
      <h2>REGISTRATION</h2>
      <form onSubmit={HandleSubmit}>
      <div>
        <input type='text' placeholder='Enter the name' name="name" value={formValues.name} onChange={handleChange} />
      </div>
      <p>{formErrors.name}</p>
      <div>
        <input type='text' placeholder='Enter the account' name="account" value={formValues.account} onChange={handleChange} />
      </div>
      <p>{formErrors.account}</p>
      <div>
        <input type='text' placeholder='Enter the IFSC' name="ifsc" value={formValues.ifsc} onChange={handleChange} />
      </div>
      <p>{formErrors.ifsc}</p>
      <div>
        <input type='text' placeholder='Enter the branch' name="branch" value={formValues.branch} onChange={handleChange} />
      </div>
      <p>{formErrors.branch}</p>
      <div>
        <input type='text' placeholder='Enter the mobile' name="mobile" value={formValues.mobile} onChange={handleChange} />
      </div>
      <p>{formErrors.mobile}</p>
      <div>
        <button onClick={showAlert}>Submit</button>
      </div>
      </form>
    </div>
  );
}

export default App;
