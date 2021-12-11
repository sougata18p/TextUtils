import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import React from "react";


// let name="Sougata Senapati";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#092642';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success");
      }
    }
    const [alert, setAlert]=useState(null);
    const showAlert=(message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
    }
  return (
    <>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
        {/* <Navbar /> */}
        {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}

    </>
    
  );
}

export default App;
