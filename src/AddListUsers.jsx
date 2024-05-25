import React, { useState } from 'react'
import {data} from './data'
const AddListUsers = () => {

    const [name, setName] = useState('')
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        console.log(name);
        const uniqueId = Date.now();
        const newUser = { id: uniqueId, name }
        const updatedUser = [...users, newUser];
        setUsers(updatedUser);
        setName('');
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h3>User Add</h3>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input type='text' id="name" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <br />
        <button type='submit'>Add</button>
          </form>
          <ul>
             { users.map(ele => <li key={ele.id}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default AddListUsers
