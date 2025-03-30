import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';

const SERVER_URL = "https://cicd-2025-server.onrender.com/name";
function App() {
  const [count, setCount] = useState(0); // Learn about Hooks in react.
  const [firstName, setFirstName] = useState(""); // Learn about Hooks in react.

  function onTextChange(event){
    setFirstName(event.target.value);
  }
  
  useEffect(()=>{
    console.log(`Hello, ${firstName}!`);

    async function submitName(name){
      const response = await fetch(SERVER_URL, {
        body: JSON.stringify({"name": name}),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })   
      return response
    }
    const res = submitName(firstName)
    console.log(`response, ${res}!`);
    
  }, [firstName])
  

  return (
    <>
      <div>
        <a href='https://google.com' target='_blank'>
          <img src={'https://www.sce.ac.il/ver/14/tpl/website/img/SamiSH-logo_2.png'} className='logo react' alt='Vite logo' />
        </a>
      </div>
      <h1>Welcome to CICD Class with Chen Asulin</h1>
      <div className='card'>
        <input 
        type='text' 
        name='firstName' 
        value={firstName}
        placeholder="Enter your first name"
        onChange={onTextChange}
        />
      </div>
    </>
  );
}

export default App;
