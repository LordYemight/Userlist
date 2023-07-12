import { useState } from "react";
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <h1 className="Log">Login Form</h1>
        <p className="use">Username</p>
        <input
        type="text"
        value={username}
        placeholder="username"
        onChange={handleUsernameChange}
        />
        <p>Password</p>
        <input
        type="password"
        value={password}
        placeholder="password"
        onChange={handlePasswordChange}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

