import React from 'react'

const People = ({ name }) => {
    console.log("Render");
  return (
    <div>
          <p>{ name}</p>
    </div>
  )
}

export default People
