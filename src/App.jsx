import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Learn about Hooks in react.

  function countUp() {
    console.log('Counting up...');
    setCount(count => count + 1);
  }

  return (
    <>
      <div>
        <a href='https://google.com' target='_blank'>
          <img src={'https://www.sce.ac.il/ver/14/tpl/website/img/SamiSH-logo_2.png'} className='logo react' alt='Vite logo' />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Welcome to CICD Class with Chen Asulin</h1>
      <div className='card'>
        <button onClick={countUp}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
