import React, { useState } from 'react';

const MultipleInput = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        isValid:false
    });

    const handleChange = (event) => {
     
        setUser({ ...user, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked  : event.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Controlled Input</h3>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input type='text' id="name" value={user.name} name="name" onChange={handleChange} />
        </div>
        <div className='row'>
          <label htmlFor='email'>Name</label>
          <input type='text' value={user.email} name="email" onChange={handleChange} id="email" />
              </div>
        <div className='row'>
          <label htmlFor='email'>Password</label>
          <input type='text' value={user.password} name="password" onChange={handleChange} id="password" />
              </div>
      <div className='row'>
          <label htmlFor='email'>Is Valid</label>
          <input type='checkbox' checked={user.isValid} name="isValid" onChange={handleChange} id="password" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MultipleInput
