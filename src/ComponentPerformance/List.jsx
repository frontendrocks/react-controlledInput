import React from 'react'
import People from './People';

const List = ({person}) => {
  return (
    <div>
          <h4>List </h4>
          {person.map(res => <People key={res.id} {...res} />)} 
    </div>
  )
}

export default List
