import React, { useState, useEffect } from 'react';
import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleShowRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setRandomUser(users[randomIndex]);
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <button onClick={handleShowRandomUser}>Users</button>
      {randomUser && (
        <div>
          <h2 className='detail'>User's Details:</h2>
          <p className='detail'>Name: {randomUser.name}</p>
          <p className='detail'>Email: {randomUser.email}</p>
          <p className='detail'>Phone: {randomUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;


