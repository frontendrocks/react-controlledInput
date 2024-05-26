import React, {useState} from 'react'

const AddPeople = ({addPeople}) => {
    const [name, setName] = useState('');

    const onHandleChange = (e) => {
    setName(e.target.value);
    }
    
    const handleSubmit = (e) => {
    e.preventDefault()
    addPeople(name);
   setName('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="name" value={name} onChange={onHandleChange} /><br />
        <button type='submit'>Add People</button>
      </form>
    </div>
  )
}

export default AddPeople
