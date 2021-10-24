import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add(`bg-${cls}`)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mode has been enabled','success');
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled','success');
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
