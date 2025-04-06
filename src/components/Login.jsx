import { useEffect, useState } from 'react';

// const SERVER_URL = 'https://cicd-2025-server.onrender.com/name';
const SERVER_URL = 'http://localhost:3000';

export default function Login() {
  const [username, setUserName] = useState(''); // Learn about Hooks in react.
  const [password, setPassword] = useState(''); // Learn about Hooks in react.
  const [responseMessage, setResponseMessage] = useState(''); // Learn about Hooks in react.

  function submitLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log('username: ', username, ' password: ', password);
    setUserName(username);
    setPassword(password);
  }

  useEffect(() => {
    console.log(`Submmiting login data, ${username}  ${password}!`);

    async function submit() {
      const response = await fetch(SERVER_URL + '/login', {
        body: JSON.stringify({ username: username, password: password }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const obj = await response.json();
      console.log('response: ', obj);

      setResponseMessage(obj.message);

      return response;
    }

    submit();
  }, [username, password]);

  return (
    <div className='appContainer'>
      <div className='card'>
        <form id='login-form' onSubmit={submitLogin}>
          <input type='text' placeholder='Enter user name' name='username' />
          <input type='password' placeholder='Enter password' name='password' />
          <button type='submit'>submit</button>
        </form>
        <h3>{responseMessage}</h3>
      </div>
    </div>
  );
}
