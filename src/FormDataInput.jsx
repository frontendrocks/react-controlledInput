import React, { useState } from 'react'

const FormDataInput = () => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData1 = new FormData(e.currentTarget);
        const name = formData1.get('name');
        const email = formData1.get('email');

        console.log(name,email);
        // const formData = new FormData(e.cu)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h3>Form Data Input</h3>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input type='text' id="name" name="name"/>
        </div>
        <div className='row'>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" id="email" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormDataInput
