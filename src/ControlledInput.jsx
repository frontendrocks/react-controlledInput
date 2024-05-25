import React, { useState } from 'react'

const ControlledInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Controlled Input</h3>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input type='text' id="name" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className='row'>
          <label htmlFor='email'>Name</label>
          <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} id="email" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledInput
