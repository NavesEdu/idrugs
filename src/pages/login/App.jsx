import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../img/logo.png';
import './App.css';

function App() {
  const history = useHistory();

  function handleClick() {
    alert('Ola');
    history.push('/dashboard');
  }




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
        <button type='submit' className='myButton' onClick={() => handleClick()}>Entrar</button>
        <div onClick={() => handleClick()}>
          <a>Esqueceu sua senha?</a>
        </div>
      </header>
    </div>
  );
  }

export default App;
