import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState("")


  const setBackgroundColor= (color) => {
    setColor(color)
  }
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000)
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = color
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - DarkMode'
      // setTimeout(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000)
      // setTimeout(() => {
      //   document.title = 'Install TextUtils Now!!'
      // }, 1500)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been disabled", "success")
      // document.title = 'TextUtils - LightMode'
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setBackgroundColor={setBackgroundColor}/>
    <Alert alert={alert}/>
    
    <div className='container my-3'>
    {/* <Routes> */}
      {/* <Route exact path='/about' element={<About />}></Route> */}
      {/* <Route exact path='/' element={}>
      </Route> */}
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      {/* /users---> component1
      /users/home---> component2 */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
