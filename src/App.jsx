import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <div className='appContainer'>
      <a href='https://sce.ac.il' target='_blank'>
        <img src={'https://www.sce.ac.il/ver/14/tpl/website/img/SamiSH-logo_2.png'} className='logo react' alt='Vite logo' />
      </a>
      <h1>Welcome to CICD Class with Chen Asulin</h1>
      <Login/>
    </div>
  );
}

export default App;
