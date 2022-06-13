import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login';

function Register() { 

    const [ name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [phone,setPhone] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


  function handlerSubmit(e) {
      e.preventDefault();

      if(!name || !password || !email || !phone){
          setFlag(true);

      }else{
          setFlag(false);
          localStorage.setItem("Name", JSON.stringify(name));
          localStorage.setItem("password",JSON.stringify(password));

          console.log("saved in Local storage");
          setLogin(!login);
      }
  }

  function handleClick(){
      setLogin(!login);
  }

  return (
    <div>

        {login ? (
      <form onSubmit={handlerSubmit}>
          <h1>Registeration </h1>   
          <div className='form-group'>
              <label>Name</label>
              <input type='text' className='form-control' placeholder='Enter Full Name'  onChange={(event)=> setName(event.target.value)}/>
          </div>
          <div className='form-group'>
              <label>Email</label>
              <input type='email' className='form-control' placeholder='Enter your Email' onChange={(event)=> setEmail(event.target.value)} />
          </div>
          <div className='form-group'>
              <label>Password</label>
              <input type='password' className='form-control' placeholder='Enter Password'  onChange={(event)=> setPassword(event.target.value)}/>
          </div>
          <div className='form-group'>
              <label>Phone no </label>
              <input type='phone' className='form-control' placeholder='Enter your phone no' onChange={(event)=> setPhone(event.target.value)} />
          </div>
           <div className='form-group'>
               <label for="job">Choose a Profession:</label>
                <select name="job" id="job">
                    <option value="React.js">React.js</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Node.js</option>
                    <option value="MongoDB">MongoDB</option>
               </select> 
            </div>
          <button type='submit' className='btn btn-dark btn-lg' >Register</button>

            <p onClick={handleClick}>Already Register {" "} login in ? </p>

            {flag && (
                <Alert color="primary" variant="danger"> Please fill the every field </Alert>
            )}
      </form>
      ):(

      <Login />

      )}
    </div>
  )
}

export default Register;
