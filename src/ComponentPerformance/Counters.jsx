import React, { useState } from 'react'
import List from './List';
import { people } from '../data';
import AddPeople from './AddPeople';
// import ChildCounter from './ChildCounter';
const CounterApp = () => {

  const [person, setPerson] = useState(people);
  

  const addPeople = (name) => {
     const uniId = Date.now();
    const newUser = { id: uniId, name };
    const updatedUser = [...person, newUser];
    setPerson(updatedUser);
  }


  return (
    <div>
      <h3>Counter App</h3>
      {/* <ChildCounter /> */}
      <AddPeople addPeople={addPeople} />
      <List person={person} />
    </div>
  )
}

export default CounterApp
