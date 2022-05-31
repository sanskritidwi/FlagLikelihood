import logo from './logo.svg';
import './App.css';
import Likelihood from './components/Likelihood';
import {React,useState} from 'react';

function App() {

  const [toggled, toggle] = useState("");
  return (
    <div>
      <Likelihood/>
    </div>
  );
}

export default App;
