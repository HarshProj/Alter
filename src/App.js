import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Dashboard } from './Components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feedbackform } from './Components/Feedbackform';
import { useState } from 'react';
function App() {
  const [create,setCreate]=useState(false)
  const [formname,setFormname]=useState('')
  return (
   <>
   <Router>
   <Navbar create={create} />
    <Routes>
      <Route path='/' element={<Dashboard setCreate={setCreate} setFormname={setFormname} formname={formname}/>}/>
    </Routes>
    <Routes>
      <Route path='/createform' element={<Feedbackform setCreate={setCreate} setFormname={setFormname} formname={formname}/>}/>
    </Routes>
   
   </Router>
   </>
  );
}

export default App;
