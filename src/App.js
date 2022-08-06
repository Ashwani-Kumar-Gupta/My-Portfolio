import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Cards from './components/cards';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  // const removeClass=()=>{
  //   document.body.classList.remove('bg-black');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  // }
  const toggleMode = (cls) => {
    // removeClass();
    if (cls === 'primary') {
      setMode('primary');
      document.body.className = 'bg-primary';
    }
    if (cls === 'success') {
      setMode('success');
      document.body.className = 'bg-success';
    }
    if (cls === 'warning') {
      setMode('warning');
      document.body.className = 'bg-warning';
    }
    if (cls === 'danger') {
      setMode('danger');
      document.body.className = 'bg-danger';
    }
    if (cls === 'dark') {
      setMode('dark');
      document.body.className = 'bg-black';
    }
    if (cls === 'light') {
      setMode('light');
      document.body.className = 'bg-light';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" myText="About" mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Cards title={"Lion"} mode={mode} imgName="https://tse4.mm.bing.net/th?id=OIP.rN6USK-JEroYLCvVp2VrkwHaFj&pid=Api&P=0&w=300&h=300" />
      <Cards title={"Tiger"} mode={mode} imgName="https://tse1.mm.bing.net/th?id=OIP.RNiGy-g4_xtKp5IoIav3YQHaFj&pid=Api&P=0&w=228&h=171" />
      <Cards title={"Eagle"} mode={mode} imgName="https://tse3.mm.bing.net/th?id=OIP.2tdFKNLaP22rQgQarI02EgHaFj&pid=Api&P=0&w=300&h=300" />
      <Cards title={"Dog"} mode={mode} imgName="https://tse1.mm.bing.net/th?id=OIP.jMhOP1ynA0L08oCf_4NiegHaFj&pid=Api&P=0&w=228&h=171" />
      <div className="container">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<> */}

        <TextFrom showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      {/* } /> */}

      {/* </Routes> */}
    </div>
      {/* </Router> */ }
    </>
  );
}

export default App;
