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
  return (
   <>
   <Router>
   <Navbar create={create}/>
    <Routes>
      <Route path='/' element={<Dashboard setCreate={setCreate}/>}/>
    </Routes>
    <Routes>
      <Route path='/createform' element={<Feedbackform setCreate={setCreate}/>}/>
    </Routes>
   
   </Router>
   </>
  );
}

export default App;
