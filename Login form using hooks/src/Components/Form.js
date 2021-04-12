import React, { useState } from 'react';
import './CSS/Form.css';

const Form = () =>{

  const [FullName, setFullName] = useState({
      fname : "",
      lname : "",
      email : "",
      number : ""
  });
  
  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    //const value = event.target.value;
    //const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) =>{
      //console.log(preValue);
      
      return{                                //USING SPREAD OPERATOR
        ...preValue,
        [name] : value,
      }                                  

      
      /*if(name === 'fname'){
        return{
          fname : value,
          lname : preValue.lname,
          email : preValue.email,
          number : preValue.number
        };
      }else if(name === 'lname'){
        return{
          fname : preValue.fname,
          lname : value,
          email : preValue.email,
          number : preValue.number
        };
      }else if(name === 'email'){
        return{
          fname : preValue.fname,
          lname : preValue.lname,
          email : value,
          number : preValue.number
        };
      }else if(name === 'number'){
        return{
          fname : preValue.fname,
          lname : preValue.lname,
          email : preValue.email,
          number : value
        };
      }*/
    });
  };

  const onSubmit = (event, {resetForm}) =>{
    event.preventDefault();
    resetForm ({ event: ''});
  }

  return(
  <>
    <div className="main">
      <form onSubmit={onSubmit}>
        <div>
          <h1> Welcome!!! {FullName.fname} {FullName.lname} </h1>
          <br />
          
          <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} required  /*value={FullName.fname}*/ />
          <br />
          <input type="text" placeholder="Enter your Last Name" name='lname' onChange={inputEvent} required /*value={FullName.lname}*/ />
          <br />
          <input type="email" placeholder="Enter your Email" name='email' onChange={inputEvent} required /*value={FullName.email}*/ autoComplete="off"/>
          <br />
          <input type="number" placeholder="Enter your Mobile Number" name='number' onChange={inputEvent} required /*value={FullName.number}*/ />
          <br />
          <button type="submit" >Click to submit!</button>
        </div>
      </form>
    </div>
  </>
  );
}

export default Form;