import React, { useEffect, useRef, useState } from 'react'
import '../Css/Dashboard.css'
import { useNavigate } from 'react-router-dom';
import img from '../Assets/plus-large-svgrepo-com 1.png'
import formimg from '../Assets/survey-standard 1.png'
export const Dashboard = (props) => {
    const [isVisible,setVisible]=useState(1);
    const navigate=useNavigate();
    const [inputtxt,setInputtxt]=useState("");
    const [formsinfo,setFormsinfo]=useState([]);
    useEffect(()=>{
        props.setCreate(false);
        if(localStorage.getItem('formname')){
            localStorage.removeItem('formname');
        }
        disp();
    },[])
    const disp=async()=>{
        try {
            const info=await fetch('https://alter-aipm.onrender.com/api/getforms',{
                method:'get',
            })
            const data=await info.json();
            setFormsinfo(data.data);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <>
    {isVisible?"":<div className='formname-feild'>
        <form className="form-title">
            <h3>Create Feedback Form</h3>
            <input type="text" name="" id="" required onChange={(e)=>{props.setFormname(e.target.value); setInputtxt(e.target.value);console.log(props.formname)}}/>
            <div className="title-btn">
            <button type='submit' onClick={inputtxt==""?console.log(""):(e)=>{ e.preventDefault();localStorage.setItem('formname',inputtxt);props.setCreate(true);navigate('/createform')}} >CREATE</button>
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
        {formsinfo?.map((value,key)=>(
            <div className="add-one form-info" >
                <div className="form">
                    <img src={formimg} alt="" />
                </div>
                <div className="formname">
                    <h3>{value.formname}</h3>
                    <div className="otherdetails">
                        <div className="f1"><span style={{color:'#8E8E8E'}}>Product Info</span> <span className='cnt'>10</span></div>
                        <div className="f1"><span style={{color:'#8E8E8E'}}>Viewed</span> <span className='cnt'>55</span></div>
                        <div className="f1"><span style={{color:'#8E8E8E'}}>Date of published</span> <span className='cnt'>{value.date}</span></div>
                        
                    </div>
                    <div className="operations">
                        <div className="viewsub">
                            <button style={{backgroundColor:'#9C27B0', color:'white'}}>View Submission</button>
                        </div>
                        <div className="opsub">
                            <button style={{backgroundColor:'#2E7D32', color:'white'}}>Edit</button>
                            <button style={{backgroundColor:'#2196F3', color:'white'}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
        
        </div>
    </div>
    </>
  )
}
