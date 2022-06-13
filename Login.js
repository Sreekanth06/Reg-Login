import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

  const[namelog, setNamelog] = useState("");
  const[passwordlog,setPasswordlog] = useState("");
  const[flag,setFlag] = useState(false);
  const[home,setHome] = useState(true);


  function handleLogin(e){
    e.preventDefault();
    let name = localStorage.getItem("Name").replace(/"/g,"");
    let pass = localStorage.getItem("password").replace(/"/g, "")


    if(!namelog || !passwordlog){
      setFlag(true);
      console.log("Empty");

    }else if(passwordlog !== pass || namelog !== name){
      setFlag(true);
    }else{
      setHome(!home);
      setFlag(false);
    }
  }


  return (
    <div>

      {home ? (
      <form onSubmit = {handleLogin}>
        <h3> Login</h3>
      <div className='form-group'>
              <label>Name</label>
              <input type='name' className='form-control' placeholder='Enter your Email' onChange={(event)=> setNamelog(event.target.value)} />
          </div>
          <div className='form-group'>
              <label>Password</label>
              <input type='password' className='form-control' placeholder='Enter Password'  onChange={(event)=> setPasswordlog(event.target.value)}/>
          </div>

          <button type = "Submit" className =  'btn btn-dark btn-lg btn-block' >Login </button>
          <p>Already registered {""} Login ?</p>

          {flag && (
                <Alert color="primary" variant="danger"> Please fill the correct info </Alert>
            )}
      </form>
      
      ):(
        <Home />
      )}

    </div>
  )
}

export default Login;
