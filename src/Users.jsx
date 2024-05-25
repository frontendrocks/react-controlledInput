import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);
    const url = 'https://api.github.com/users';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const usersResponse = await response.json();
                setUsers(usersResponse);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])
  return (
    <div>
          <h3>Users List</h3>
          <section>
              <ul>
              {users.map((ele) => {
                  const { login, node_id } = ele;
                  return <li key={node_id}>{login}</li>
              })}
              </ul>
          </section>
    </div>
  )
}

export default Users
