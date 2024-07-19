import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import InputFields from './inputfields';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <InputFields /> 
      </div>
    </div>
  );
}

export default App;
