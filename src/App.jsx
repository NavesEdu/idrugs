import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className='logo'/>
        <label>E-mail:</label>
        <input type="e-mail" placeholder="Entre com o seu e-mail" className='input'/>
        <br />  
        <label>Senha:</label>
        <input type="password" placeholder="Entre com a sua senha" className='input'/>
        <br />  
        <button type='submit' className='myButton'>Entrar</button>
      </header>
    </div>
  );
  }

export default App;
