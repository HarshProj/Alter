import React, { useEffect, useRef, useState } from 'react'
import '../Css/Dashboard.css'
import { useNavigate } from 'react-router-dom';
import img from '../Assets/plus-large-svgrepo-com 1.png'
export const Dashboard = (props) => {
    const [isVisible,setVisible]=useState(1);
    const navigate=useNavigate();
    const [inputtxt,setInputtxt]=useState("");
    useEffect(()=>{
        props.setCreate(false);
    },[])
  return (
    <>
    {isVisible?"":<div className='formname-feild'>
        <form className="form-title">
            <h3>Create Feedback Form</h3>
            <input type="text" name="" id="" required onChange={(e)=>{setInputtxt(e.target.value)}}/>
            <div className="title-btn">
            <button type='submit' onClick={inputtxt==""?console.log(""):()=>{navigate('/createform');props.setCreate(true)}} >CREATE</button>
            <button className='cancle' onClick={()=>{setVisible(1)}}>CANCLE</button>

            </div>
        </form>
        </div>}
            <div className='dash-home'>
        <div className="dash-main">
        <div className="add-one" onClick={()=>{setVisible(0)}}>
            <div className="add-content">

            <img src={img} alt="relode" />
            <h3>New Form</h3>
            </div>
        </div>
        <div className="add-one">
            <div className="add-content">

            <img src={img} alt="relode" />
            <h3>New Form</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
